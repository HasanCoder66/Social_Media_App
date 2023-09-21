import './friends.css'
import user from '../../dummydata'

function Friends({user}) {
  return (
    <li className="sideBarFriend">
    <img src={user.profilePicture} alt="Friend Image" className="sideBarFriendImg" />
    <span className="sideBarFriendName">Mukhtar Ahmed</span>
  </li>
  )
}

export default Friends