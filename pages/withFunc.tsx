import React, { FC, useState } from "react";

const Parent = () => {
  const [text, setText] = useState("");
  const [childName, setChildName] = useState("");

  console.log("i am parent");

  const childNameHandler = (value: string) => {
    setChildName(value);
  };

  return (
    <div className="Wrapper">
      <h1>I am Parent</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <Child childName={childName} onChange={childNameHandler} />
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

const Child: FC<{
  childName: string;
  onChange: (value: string) => void;
}> = React.memo(({ childName, onChange }) => {
  console.log("i am child");
  return (
    <div>
      <h1>I am Child</h1>
      <textarea value={childName} onChange={(e) => onChange(e.target.value)} />
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
