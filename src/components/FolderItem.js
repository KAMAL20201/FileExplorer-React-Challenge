import React, { useState, useRef } from "react";
import { FcFolder } from "react-icons/fc";
import { AiOutlineFile } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiFillFolderAdd } from "react-icons/ai";
import RecurComponent from "./RecurComponent";

function FolderItem({ item }) {
  const [showItems, setShowItems] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(item.name);
  const [showinputFile, setShowinputFile] = useState(false);
  const inputRef = useRef();
  const addfileInputRef = useRef();

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
  const handleOnBlur = () => {
    setIsEditing(false);
    setInputValue(inputRef.current.value);
  };
 

  const handleClick = () => {
    setShowItems(!showItems);
  };
  // const addFileHandler = () => {
  //   setShowItems(true);
  //   setShowinputFile(true);
  // };

  // const handleKeyOnAddFile = (event) => {
  //   if (event.key === "Enter") {
      
  //     setShowinputFile(false);
  //     const updatedItem={
  //       id:item.id,
  //       name:addfileInputRef.current.value,
  //       parentName:item.name,
        
  //     }
  //     onAddingFile(updatedItem);
      
  //   }
  // };
  // const handleOnAddFileBlur = () => {
  //   setShowinputFile(false);
  //   const updatedItem={
  //     id:item.id,
  //     name:addfileInputRef.current.value,
  //     parentName:item.name,
  //   }
   
  //   onAddingFile(updatedItem);
  // };

  return (
    <li>
      <div className="folder__one">
        <span onClick={handleClick}>
          {" "}
          {item.isFolder ? <FcFolder /> : <AiOutlineFile />}
        </span>
        {isEditing ? (
          <input
            type="text"
            ref={inputRef}
            defaultValue={inputValue}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
            onBlur={handleOnBlur}
          />
        ) : (
          <p onClick={handleClick}>{inputValue}</p>
        )}
        <span onClick={editHandler} className="editable">
          <FiEdit2 />
        </span>
        {item.isFolder && (
          <span className="addFile" 
          // onClick={addFileHandler}
          >
            <BsFileEarmarkPlus />
          </span>
        )}
        {item.isFolder && (
          <span className="addFolder">
            <AiFillFolderAdd />
          </span>
        )}
      </div>
      {showItems && item.items && item.items.length > 0 && (
        <>
          <RecurComponent items={item.items} />
          {showinputFile && (
            <div className="addfile__input">
              <BsFileEarmarkPlus />
              <input
                type="text"
                placeholder="file here"
                ref={addfileInputRef}
                // onKeyDown={handleKeyOnAddFile}
                // onBlur={handleOnAddFileBlur}
              />
            </div>
          )}
        </>
      )}
    </li>
  );
}

export default FolderItem;