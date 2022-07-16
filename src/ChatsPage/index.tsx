import { CSSProperties } from "react";

import valley from "../assets/valley.jpeg";

const ChatsPage = () => {
  const backgroundImage = {
    backgroundImage: `url(${valley})`, // Here due to variable
  } as CSSProperties;

  return (
    <div className="background-image" style={backgroundImage}>
      <div className="background-gradient-light"></div>
    </div>
  );
};

export default ChatsPage;
