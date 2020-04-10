import React from "react";


function NewTaskForm({ handleFormSubmit, handleInputChange }) {
    return (
        <form onSubmit={handleFormSubmit}>
            <input
                className="form-control"
                type="text"
                placeholder="Enter main task"
                name="task"
                onChange={handleInputChange}
            />

            <input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Enter a smaller sub task"
                name="subtask"
                onChange={handleInputChange}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Notes"
                name="notes"
                onChange={handleInputChange}
            />

            <button className="btn btn-success" type="submit">
                Submit
          </button>
        </form>
    );
}

export default NewTaskForm;

