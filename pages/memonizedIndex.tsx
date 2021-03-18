import React, { useState } from "react";

const Parent = () => {
  const [text, setText] = useState("");
  console.log("i am parent");

  return (
    <div className="Wrapper">
      <h1>I am Parent</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <Child />
      <style jsx>{`
        .Wrapper {
          width: 300px;
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
      <h1>I am Child</h1>
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
