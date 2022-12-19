function Comment({comment}){
    return (
        <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
        </div>
    )
}

export default Comment