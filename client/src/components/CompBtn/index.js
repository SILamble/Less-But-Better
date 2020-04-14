import React from "react";

function CompBtn({ id, name, value, handleUpdate }) {
  return (
    <button type="button" onClick={() => handleUpdate(id, name, value)}>Complete Task</button>
  );
}

export default CompBtn;
