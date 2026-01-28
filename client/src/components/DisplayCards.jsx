import { useEffect } from "react";
import Card from "./Card";
import EditTask from "./EditTask";

function DisplayCards({ taskList, setTaskList }) {



    return (
        <div className="tasks flex gap-5 flex-wrap">
            {
                taskList.map((task, index) => (
                    <div
                        key={index}
                        className={`w-fit text-black rounded-lg p-5 border-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl
                            ${task.isComplete ?
                                "bg-emerald-200 border-emerald-800 opacity-80" : "bg-gray-300 border-zinc-300 hover:bg-zinc-100"
                            }`
                        }>

                        <Card title={task.title} description={task.description} />

                        <button
                            onClick={() => {
                                setTaskList(taskList.map((x) => x.title === task.title ? { ...x, isComplete: true } : x));
                            }}
                            className={`mt-4 px-4 py-2 rounded-md font-semibold transition-all
                            ${task.isComplete ?
                                    "bg-emerald-700 text-white cursor-not-allowed" : "bg-zinc-800 text-white hover:bg-zinc-700 hover:scale-105"
                                }`
                            }
                            disabled={task.isComplete}>
                            {task.isComplete ? "Completed" : "Mark as complete"}
                        </button>

                        <EditTask taskList={taskList} setTaskList={setTaskList}/>


                    </div>
                ))
            }
        </div>
    )
}

export default DisplayCards;