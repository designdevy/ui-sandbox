import React, { useState, useEffect } from "react";
import { SelectWrapper, SelectItem } from "./Select.styled";
import Checkbox from "./Checkbox";
import Search from "./Search";

function Select({ title, items, multiSelect = false, search = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
        setCurrentTitle(item.value);
        setOpen(false);
      } else if (multiSelect) {
        setSelection([...selection, item]);
        setCurrentTitle(() => {
          let items = [item.value];
          selection.forEach(item => {
            items.unshift(item.value);
          });
          console.log(items.join(", "));
          return items.join(", ");
        });
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
      if (multiSelect) {
        setCurrentTitle(() => {
          let items = [];
          selectionAfterRemoval.forEach(item => {
            items.unshift(item.value);
          });
          console.log(items.join(", "));
          if (items.length !== 0) {
            return items.join(", ");
          }
          return "Select";
        });
      }
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = items.filter(({ value }) =>
      value.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [items, searchTerm]);

  return (
    <SelectWrapper open={open}>
      <div
        tabIndex={0}
        className="dd-header"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <p className="dd-header__title">{currentTitle}</p>
        <svg
          className="dd-header__action"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <path
            className="dd-header__action--icon"
            fill="#2A2A2E"
            fillRule="evenodd"
            d="M6.708 8.999c-.39.39-1.023.39-1.414 0l-.002-.002L.603 4.279c-.292-.294-.29-.769.004-1.061.14-.14.33-.218.528-.218h9.761c.415 0 .75.336.75.75 0 .199-.079.39-.22.53L6.709 9z"
          />
        </svg>
      </div>
      {open && (
        <ul className="dd-list">
          {search && (
            <Search searchTerm={searchTerm} handleChange={handleChange} />
          )}
          {searchResults.map(item => (
            <SelectItem
              selected={isItemInSelection(item)}
              multiSelect={multiSelect}
              key={item.id}
            >
              <div className="item-content" onClick={() => handleOnClick(item)}>
                {multiSelect && (
                  <span>
                    <Checkbox checked={isItemInSelection(item)} readOnly />
                  </span>
                )}
                <span>{item.value}</span>
              </div>
            </SelectItem>
          ))}
        </ul>
      )}
    </SelectWrapper>
  );
}

export default Select;
