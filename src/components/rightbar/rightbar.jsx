import "./rightbar.css";
import {Users} from '../../dummydata'
import Online from '../online/online'

function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0386Liee09q21YWw-9MzWukqAt05J-VIslUxa7t6l&s"
            alt=""
          />
          <span className="birthdayText">
            <b>M.Hasan</b> and <b>3 others friends</b> have a birthday today.
          </span>
        </div>
        <img
          
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/337885313/original/8f28af48e9d8c4bf628e4cf4d344cd3d00a0e9ec/be-your-frontend-web-developer-using-html-css-javascript.png"
          alt=""
          className="rightbarAd"
        />
        <h4 className="rightbarTitle"> Online Friends </h4>
        <ul className="rightbarFriendList">
          {Users.map(u=> (
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
