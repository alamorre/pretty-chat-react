import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd/es/select";
import { useState } from "react";

import { PersonObject } from "react-chat-engine-advanced";

interface CustomChatFormProps {
  username: string;
  secret: string;
  onSelect: (chatId: number) => void;
}

const UserSearch = (props: CustomChatFormProps) => {
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<PersonObject[]>([]);
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const searchResult = (query: string) => {
    return users.map((user) => {
      return {
        value: user.username,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          ></div>
        ),
      };
    });
  };
  const handleSearch = (query: string) => {
    setOptions(query ? searchResult(query) : []);
  };

  return (
    <div>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        className="ce-chat-form-autocomplete"
        options={options}
        onSelect={(val: any) => console.log("val", val)}
        onSearch={handleSearch}
        value={query}
      >
        <Input.Search
          size="large"
          placeholder="Chats"
          enterButton
          onChange={(e: any) => setQuery(e.target.value)}
        />
      </AutoComplete>
    </div>
  );
};

export default UserSearch;
