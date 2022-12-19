function Detials({title, views, createdAt, upVotes, downVotes, setUpVotes, setDownVotes}){
    const handleUpVotes = () => {
        setUpVotes(() => upVotes + 1)
    }
    
    const handleDownVotes = () => {
        setDownVotes(() => downVotes + 1)
    }

    return (
        <div id="detials">
            <h2>{title}</h2>
            <p>{`${views} Views|Uploaded ${createdAt}`}</p>
            <button onClick={handleUpVotes}>{`${upVotes} 👍`}</button>
            <button onClick={handleDownVotes}>{`${downVotes} 👎`}</button>
        </div>
    )
}

export default Detials