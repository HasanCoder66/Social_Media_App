import Share from '../share/Share'
import Post from '../../components/post/post';
import {Posts } from '../../dummydata'
import "./feed.css";

function Feed() {

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>(

        <Post key={p.id} post = {p}/>
        ))}
      </div>
    </div>
  );
}

export default Feed;
