import './post.css'
import { MdMoreVert } from "react-icons/md";
function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Profile Image" />
                    <span className='postUsername'> Alex jane</span>
                    <span className='postDate'> 5 mints ago</span>
                </div>
                <div className="postTopRight">
                <MdMoreVert className='postIcon'/>

                </div>
            </div>
            <div className="postCenter">
                <span className="postText"> Hey! this is my first post:)  </span>
                <img className='' src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft"></div>
                <div className="postBottomRight"></div>
            </div>
        </div>
    </div>
  )
}

export default Post