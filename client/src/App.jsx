import { useState } from 'react';
import Header from './components/Header.jsx';
import AddTask  from './components/AddTask.jsx';
import DisplayCards from './components/DisplayCards.jsx';

function App() {
    const [taskList, setTaskList] = useState([]);

    return (
            <div className="app flex flex-col bg-[#0F172A] text-[#E5E7EB] h-screen">
                <div className="hero relative">
                    <Header />
                    <AddTask taskList={taskList} setTaskList={setTaskList}/>
                </div>

                <DisplayCards taskList={taskList} setTaskList={setTaskList}/>
            </div>
    )
}

export default App