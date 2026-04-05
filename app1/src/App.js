import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("default_webpack_mf_second/App"));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1 className="text-red-400 bg-blue-600">App1 1 dd</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
