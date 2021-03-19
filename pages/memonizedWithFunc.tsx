import React, { FC, useCallback, useState } from "react";

const Parent = () => {
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");

  console.log("i am parent");

  const childNameHandler = useCallback((value: string) => {
    setChildName(value);
  }, []);

  return (
    <div className="Wrapper">
      <h1>子供にReact.memo使用していて、子供に渡す関数をuseCallbackしているパターン</h1>
      <h2>I am Parent</h2>
      <textarea value={parentName} onChange={(e) => setParentName(e.target.value)} />
      <Child childName={childName} onChange={childNameHandler} />
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

const Child: FC<{
  childName: string;
  onChange: (value: string) => void;
}> = React.memo(({ childName, onChange }) => {
  console.log("i am child");
  return (
    <div>
      <h2>I am Child</h2>
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
