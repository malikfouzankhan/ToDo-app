const Card = ({ title, description }) => {
    return (
        <div className="card">
            <h1 className="text-2xl">Title: {title}</h1>
            <p className="text-xl">Description: {description}</p>
        </div>
    )
}

export default Card;