import { useState } from "react";
import "./TagInput.css";

function TagInput() {
  const [tags, setTags] = useState(["Frontend", "React"]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, inputValue]);
    }
  };

  const removeTag = (indexToRemove) => {
    // TODO: Remove the tag at the given index
    // Hint: Use filter to exclude the tag
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
