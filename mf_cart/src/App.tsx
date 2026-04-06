import React from "react";

export type Props = {
  name: string;
};

const App = ({ name }: Props) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan",
      }}
    >
      <h1 className="text-red-300">My Cart!! {name}</h1>
    </div>
  );
};

export default App;
