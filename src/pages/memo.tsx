import { NextPage } from "next";
import { useState, useMemo, ChangeEvent } from "react";

const names = [
  {
    id: 1,
    name: "Jon",
    permissons: {
      display: false,
      delete: true,
      add: false,
    },
  },
  {
    id: 2,
    name: "Hiro",
    permissons: {
      display: false,
      delete: false,
      add: false,
    },
  },
  {
    id: 3,
    name: "Taro",
    permissons: {
      display: false,
      delete: false,
      add: false,
    },
  },
  {
    id: 4,
    name: "Aran",
    permissons: {
      display: false,
      delete: true,
      add: true,
    },
  },
];

const Memo: NextPage = () => {
  const [state, setState] = useState(names);
  const [text, setText] = useState("");

  const selectedName = useMemo(() => {
    console.log("name render");

    return state.filter((s) => !s.permissons.delete);
  }, [state]);

  const onChangeTextInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      {selectedName.map((n) => (
        <div key={n.id}>{n.name}</div>
      ))}
      {console.log("render")}
      <input type="text" value={text} onChange={onChangeTextInputHandler} />
    </div>
  );
};

export default Memo;
