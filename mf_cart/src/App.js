import React from "react";

const App = (props) => {
  console.log("cart", props);
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "cyan",
      }}
    >
      <h1 className="text-red-300">Cart!!</h1>
    </div>
  );
};

export default App;
