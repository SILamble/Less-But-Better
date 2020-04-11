import React from "react";


function NewTaskForm({ handleFormSubmit, handleInputChange }) {
    return (
        <form onSubmit={handleFormSubmit}>
            <p><input
                className="form-control"
                type="text"
                placeholder="Enter main task"
                name="task"
                onChange={handleInputChange}
            /></p>

            <p><input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            /></p>
            <p><input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            /></p>
            <p><input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            /></p>
            <p><input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            /></p>
            <p><input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            /></p>
            <p><input
                className="form-control"
                type="text"
                placeholder="Notes"
                name="notes"
                onChange={handleInputChange}
            /></p>

            <button className="btn btn-success" type="submit">
                Submit
          </button>
        </form>
    );
}

export default NewTaskForm;

