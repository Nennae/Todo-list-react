import * as React from 'react';

const AddTask = () => {
      return (
            <>
            <form className="add-form" onChange="submitTask">
                  <label htmlFor="add-input">Add Task</label>
                  <input type="text" placeholder="Write here"></input>
            </form>
            <button className="add-btn" type="submit" onChange="submitTask">
            Submit
      </button>
      </>
      )
}

export default AddTask;