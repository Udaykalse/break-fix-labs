import { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    // TODO: Open the modal
  };

  const closeModal = () => {
    // TODO: Close the modal
  };

  useEffect(() => {
    // TODO: Add event listener for Escape key
    // Close modal when Escape is pressed

    return () => {
      // TODO: Cleanup event listener
    };
  }, [isOpen]);

  return (
    <div className="app">
      <h1>Modal Dialog Demo</h1>
      <button className="open-btn" onClick={openModal}>
        Open Modal
      </button>

      {/* TODO: Conditionally render modal when isOpen is true */}
      <div className="modal-overlay">
        <div className="modal">
          <h2>Modal Title</h2>
          <p>
            This is the modal content. Click outside or press Escape to close.
          </p>
          <button className="close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
