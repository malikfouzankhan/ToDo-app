import { useState } from "react";
import createTask from "../models/task.model";

function AddTask({ taskList, setTaskList }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function addTask() {
        if (!title) {
            return;
        }
        setTaskList([...taskList, createTask(title, description)]);
        console.log(taskList);
        setTitle("");
        setDescription("");
    }

    return (
        <div className="action max-w-1/3 flex flex-col gap-5 p-5">
            <div className="task-title flex gap-2">
                <label className='self-center min-w-36 text-xl' htmlFor="title">Task title</label>
                <input
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    className='min-w-50  rounded-l bg-gray-300 text-black p-2'
                    placeholder='Your title'
                    type="text"
                    name="title"
                    id="title" />
            </div>

            <div className="task-description flex gap-2">
                <label className='self-center min-w-36 text-xl' htmlFor="description">Task description</label>
                <textarea
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    className='min-w-50 rounded-l bg-gray-300 text-black p-2'
                    placeholder='Description'
                    name="description"
                    id="description">
                </textarea>
            </div>

            <button
                onClick={addTask}
                className='bg-[#14B8A6] w-fit self-center px-2 py-1 rounded-sm text-black cursor-pointer hover:bg-[#81c6be]'>Add Task</button>
        </div>
    )
}

export default AddTask;