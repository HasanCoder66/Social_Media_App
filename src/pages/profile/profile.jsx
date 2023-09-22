import "./profile.css";

import TopBar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";

function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img className='profileCoverImg' src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/315889220_658320629214791_7094897146108455811_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeE2yeTiOq8ciqZBpeMZbRRZpPiKHn0stvqk-IoefSy2-iTMw18X8NkQR9I_O3jnj0wKDO8s_Az-ipYhSGZMtbCI&_nc_ohc=OraNKKFdsLgAX_0JeBn&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&oh=00_AfCPWHFNQaroi4IM0IBI0uozU8213j3DMzWIrRz2pqFsuw&oe=65126E50" alt="" />
              
                <img className='profileUserImg' src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/327981467_834709994300177_6515274382852458412_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeG3fA3ejJpqwCgojyIq7B_5yraLSa0Cj13KtotJrQKPXZQU_wcggEONH5jGRiv3xNykmoyYhFHlx3LCYd06mhrz&_nc_ohc=A6rmoGjQCyIAX-3mM6Z&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&oh=00_AfCdhJMbSiuFjhAVLKmsiyHVKS7gxtXebWBZQKmNvwDbng&oe=6512FF4C" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Muhammad Hasan Ashraf</h4>
                <span className="profileInfoDesc">Hello Social Media Community</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
