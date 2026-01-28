function EditTask({ taskList, setTaskList }) {
    return (
        <>
            <button
                className="mt-3 ml-2 inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white
             transition-all duration-200 hover:bg-sky-500 hover:scale-105
             active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
                ✏️
            </button>
        </>
    )
}

export default EditTask;