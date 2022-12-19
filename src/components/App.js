import video from "../data/video.js";
import { useState } from "react";
import Detials from "./Detials.js";
import Comments from "./Comments";

function App() {
  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);
  const [hideComments, setHideComments] = useState(false);

  //console.log(video.comments)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Detials title={video.title} views={video.views} createdAt={video.createdAt} upVotes={upVotes} downVotes={downVotes} setUpVotes={setUpVotes} setDownVotes={setDownVotes}/>
      <Comments comments={video.comments} hideComments={hideComments} setHideComments={setHideComments} />
    </div>
  );
}

export default App;
