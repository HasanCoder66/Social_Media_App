import Share from '../share/Share'
import Post from '../../components/post/post';
import "./feed.css";

function Feed() {

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
      </div>
    </div>
  );
}

export default Feed;
