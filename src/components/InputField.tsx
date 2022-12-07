import React from "react";
import "./style.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div>
      <form action="" className="input" onSubmit={handleAdd}>
        <input
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          className="ibox"
        />
        <button className="isubmit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
