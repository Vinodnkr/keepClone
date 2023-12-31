// NewNote.js

import React, { useState } from "react";

function NewNote({ add }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    add(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="newnote">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content">
            <div className="input-title">
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
            <p>
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Take a note..."
                className="materialize-textarea"
              ></textarea>
            </p>
          </div>
          <a onClick={handleAddNote} className="btn-floating btn-large halfway-fab waves-effect waves-dark blue">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
