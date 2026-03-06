import { useState } from "react";
import "./TagInput.css";

function TagInput() {
  const [tags, setTags] = useState(["Frontend", "React"]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // let a ==
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((tag, index) => index !== indexToRemove));
  };

  return (
    <div className="container">
      <div className="tag-box">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <span>{tag}</span>
            <button onClick={() => removeTag(index)} className="remove-btn">
              ×
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a tag..."
          className="tag-input"
        />
      </div>
    </div>
  );
}

export default TagInput;
