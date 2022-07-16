import { useState, useContext } from "react";

// import axios from "axios";

import { PersonObject } from "react-chat-engine-advanced";

import { projectId } from "../hooks/constants";

import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Link from "../components/Link";

interface LogInFormProps {
  onHasNoAccount: () => void;
}

const LogInForm = (props: LogInFormProps) => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="form-title">Welcome Back</div>

      <div className="form-subtitle">
        New here? <Link onClick={() => props.onHasNoAccount()}>Sign Up</Link>
      </div>

      <form>
        <TextInput
          label="Email"
          name="email"
          placeholder="adam@lamorre.co"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default LogInForm;
