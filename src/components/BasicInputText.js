import React from "react";
import BasicLabel from "./BasicLabel";
import "../App.css";

export default function BasicInputText({ name, type, human_label, onChange }) {
  return (
    <div>
        <BasicLabel label={human_label} />
        <input
          type={type}
          name={name}
          onChange={onChange}
          className="input-text"
        />
    </div>
  );
}
