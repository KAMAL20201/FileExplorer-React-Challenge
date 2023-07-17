import FolderItem from "./FolderItem";
import { useState } from "react";
function RecurComponent({ items }) {

  const [dataItems, setDataItems] = useState(items);
  // const handleOnAddingFile = (newItem) => {

  //   setDataItems((prevItems) => {
  //     const updatedItems = prevItems.map((item) => {
  //       if (item.name === newItem.parentName) {
  //         return {
  //           ...item,
  //           items: [...item.items, newItem],
  //         };
  //       }
  //       return item;
  //     });
  //     return updatedItems;
  //   });

  // };
 
  return (
    <ul className="list">
      {dataItems.map((item) => (
        <FolderItem
          key={item.name}
          item={item}
          // onAddingFile={handleOnAddingFile}
        />
      ))}
    </ul>
  );
}

export default RecurComponent;
