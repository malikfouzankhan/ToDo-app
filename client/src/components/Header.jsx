import { useState, useEffect } from "react";
import motivatingQuotes from "../data/quotes";

function Header() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        let index = Math.floor(Math.random() * motivatingQuotes.length);
        setQuote(motivatingQuotes[index].quote);
        setAuthor(motivatingQuotes[index].author);
    }, []);
    return (
        <>
            <h1 className='text-6xl p-5 font-extrabold w-fit'>ToDo</h1>
            <div className="quote flex flex-col max-w-1/2 absolute right-0">
                <p className='text-2xl px-5 py-2 w-fit'>{quote}</p>
                <p className='text-2xl px-5 py-2 self-end'>- {author}</p>
            </div>
        </>
    )
}

export default Header