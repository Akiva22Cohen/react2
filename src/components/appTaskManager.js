import React, { useState } from "react";
import Tasks from "./tasks";

function TaskManager() {
  // let listTasks = [{}];
  let [listTasks, setlistTasks] = useState({ title: '', desc: '' });
  // console.log(listTasks);
  return (
    <div className='container-fluid'>
      <div className="container">
        <header style={{ minHeight: '10vh' }}>

        </header>
        <div
          style={{
            direction: 'rtl',
            height: '80vh'
          }}
          className="text-bg-info mx-auto rounded shadow col-md-8 col-sm-10 col-12 p-1 p-sm-2 p-md-3"
        >
          <h2>מנהל משימות</h2>
          <div
            className="col-md-8 col-10 mx-auto text-bg-light rounded shadow p-1 p-md-2 m-1"
          >
            <div className="m-1">
              <label htmlFor="tital_id">כותרת</label>
              <input
                onChange={e => {
                  setlistTasks({ ...listTasks, title: e.target.value })
                  function dssd(eqwew){
                    
                  }
                  console.log(listTasks)
                }}
                className="form-control"
                id="tital_id"
                type="text"
                placeholder="כותרת משימה"
                title="כתוב כותרת משימה"
              />
            </div>
            <div className="m-1">
              <label htmlFor="task_id">משימה</label>
              <input
                className="form-control"
                id="task_id"
                type="text"
                placeholder="תיאור משימה"
                title="כתוב משימה"
              />
            </div>
            <button
              title="הוסף משימה"
              className="btn btn-success m-1"
            >+</button>
          </div>
          <div
            style={{
              // minHeight: '10vh',
              // maxHeight: '40vh'
            }}
            className="rounded shadow text-bg-secondary col-md-8 col-10 mx-auto bg-opacity-75 m-1 overflow-auto p-1 h-50"
          >
            <Tasks title='כותרת משימה' desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam autem molestiae porro delectus sed, cupiditate veniam eveniet culpa numquam ratione consequatur odio? Eum facere voluptatem aut quisquam accusamus repellat facilis?' />
            <Tasks title='כותרת משימה' desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam autem molestiae porro delectus sed, cupiditate veniam eveniet culpa numquam ratione consequatur odio? Eum facere voluptatem aut quisquam accusamus repellat facilis?' />
            <Tasks title='כותרת משימה' desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam autem molestiae porro delectus sed, cupiditate veniam eveniet culpa numquam ratione consequatur odio? Eum facere voluptatem aut quisquam accusamus repellat facilis?' />
            {/* <Tasks />
            <Tasks />
            <Tasks />
            <Tasks /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
