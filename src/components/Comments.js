import Comment from "./Comment"

function Comments({comments, hideComments, setHideComments}){
    const handleOnClick = () => {
        setHideComments(!hideComments)
    }

    const renderComments = () => {
        if(!hideComments){
            return(
            comments.map((comment) => {
                return <Comment comment={comment} />
            }))
        }
    }

    return (
        <div id="comments">
            <button onClick={handleOnClick}>{hideComments ? "Show Comments" : "Hide Comments"}</button>
            
            {renderComments()}
        </div>
    )
}

export default Comments