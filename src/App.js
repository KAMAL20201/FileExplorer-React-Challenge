import { useRef, useState } from "react";
import explorer from "./data/data";
import { FcFolder } from "react-icons/fc";
import RecurComponent from "./components/RecurComponent";
import { FiEdit2 } from "react-icons/fi";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiFillFolderAdd } from "react-icons/ai";

import "./App.css";

function App() {
  const [showItems, setShowItems] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(explorer.name);

  const inputRef = useRef();

  const editHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsEditing(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      setInputValue(inputRef.current.value);
    }
  };

  return (
    <div className="App">
      <h1>File Explorer</h1>

      <div className="folder" onClick={() => setShowItems(!showItems)}>
        <FcFolder />
        {isEditing ? (
          <input
            type="text"
            ref={inputRef}
            defaultValue={inputValue}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <p>{inputValue}</p>
        )}
        <span onClick={editHandler} className="editable">
          <FiEdit2 />
        </span>
        <span className="addFile">
          <BsFileEarmarkPlus />
        </span>
        <span className="addFolder">
          <AiFillFolderAdd />
        </span>
      </div>

      {showItems && <RecurComponent items={explorer.items} />}
    </div>
  );
}

export default App;
