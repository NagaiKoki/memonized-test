import React, { useState } from "react";

const Parent = () => {
  const [parentName, setParentName] = useState("");
  console.log("i am parent");

  return (
    <div className="Wrapper">
      <h1>子供にReact.memo使用</h1>
      <h2>I am Parent</h2>
      <textarea value={parentName} onChange={(e) => setParentName(e.target.value)} />
      <Child />
      <style jsx>{`
        .Wrapper {
          width: 600px;
          margin: 100px auto;
        }
      `}</style>
    </div>
  );
};

export default Parent;

const Child = React.memo(() => {
  console.log("i am child");
  return (
    <div>
      <h2>I am Child</h2>
      <ul>
        <li>bob</li>
        <li>bob</li>
        <li>bob</li>
        <li>bob</li>
        <li>bob</li>
        <li>bob</li>
        <li>bob</li>
      </ul>
    </div>
  );
});
