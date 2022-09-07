const AddTask = () => {
      return (
            <form className="add-form">
                  <label htmlFor="add-input">Add Task</label>
                  <input type="text" placeholder="Write here"></input>
                  <input type="submit" onChange="submitTask"></input>
            </form>
      )
}

export default AddTask;