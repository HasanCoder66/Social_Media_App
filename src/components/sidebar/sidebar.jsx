import { MdOutlineRssFeed, MdGroups } from "react-icons/md";
import { FaUserFriends, FaGraduationCap } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { BiCalendarEvent } from "react-icons/bi";
import {
  BsBookmarks,
  BsFillQuestionOctagonFill,
  BsFillBagFill,
  BsFillCameraVideoFill,
  BsFillChatSquareFill,
} from "react-icons/bs";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <MdOutlineRssFeed className="sideBarIcon" />
            <span className="sideBarListItemText"> Feed </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsFillChatSquareFill className="sideBarIcon" />
            <span className="sideBarListItemText"> Chats </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <FaUserFriends className="sideBarIcon" />
            <span className="sideBarListItemText"> Friends </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <SiCoinmarketcap className="sideBarIcon" />
            <span className="sideBarListItemText"> MarketPlace</span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsBookmarks className="sideBarIcon" />
            <span className="sideBarListItemText"> Bookmarks </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsFillQuestionOctagonFill className="sideBarIcon" />
            <span className="sideBarListItemText"> Questions </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsFillBagFill className="sideBarIcon" />
            <span className="sideBarListItemText"> Jobs </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BiCalendarEvent className="sideBarIcon" />
            <span className="sideBarListItemText"> Event </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <FaGraduationCap className="sideBarIcon" />
            <span className="sideBarListItemText"> Courses </span>
          </li>
        </ul>
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <BsFillCameraVideoFill className="sideBarIcon" />
            <span className="sideBarListItemText"> Videos </span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://scontent.fkhi4-4.fna.fbcdn.net/v/t39.30808-6/229696517_3733015320257735_3702521343751884111_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=05bb41&_nc_eui2=AeGWQAvrWjzxu12RqkSDkKKcxj5XUVXX-anGPldRVdf5qU5x03YRys5M-opGiQ4oeMDLt2xZInIrcmlirfsaRJR3&_nc_ohc=WC_YY1sbQaEAX8REEJw&_nc_zt=23&_nc_ht=scontent.fkhi4-4.fna&oh=00_AfDIGM5Z0LNn9_JNDchBlTIZbCckJMr7_OEKInykuGQDBQ&oe=650B0D2D" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Mukhtar Ahmed</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://avatars.githubusercontent.com/u/66431140?v=4" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Inno Sufiyan</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/345311009_258186086771756_7664821404621272617_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTgBxmyxd_7lbya76FuFBOcXHjXxvHPjzJv-gX6p5GL0Q&oe=65139D14&_nc_sid=000000&_nc_cat=109" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Rizwan Ahmed</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/362664611_261602233487395_4619204579469942491_n.jpg?ccb=11-4&oh=01_AdSIkXLeOfhJL907IWre5bSxCSLCAXeE8I7hkIIZILvQLA&oe=6512EBD7&_nc_sid=000000&_nc_cat=111" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Abdullah Sajid</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/352578953_969244984302854_1413938098591878605_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQpcKgHZ6JiAgDgwP6Pqev0dvvFEgpQ1-KHCa5Bg8AEnA&oe=65117E01&_nc_sid=000000&_nc_cat=105" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Muhammad Anas</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/376723860_185399867904646_3421686290803778531_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ4v3PwOkz1Izh7XWT-EUPzlHtbkuNcJCnxDQiSh1iCDQ&oe=6513A094&_nc_sid=000000&_nc_cat=107" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Huzaifa</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/377306552_245838805113186_6067130489770876567_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTay-dR-BFhBk7PsUY-Ptp7iEOI484pToX887WxZYxE8Q&oe=65140659&_nc_sid=000000&_nc_cat=111" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Salik</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/328072017_759863642140774_7366903725361107467_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRZTda3TjH0K6BNO1LHCmlarsojoR8lZQBJPU8ttJ2faQ&oe=6513A9E3&_nc_sid=000000&_nc_cat=109" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Muhammad Reyan</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/368038602_1332299564043313_5029650150761836694_n.jpg?ccb=11-4&oh=01_AdSWzJmJgCtG8cX3ORSBJDFy3cl6iTcYcdyy6o91qsYMJA&oe=65141BF6&_nc_sid=000000&_nc_cat=110" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Hammad Shah</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/339800392_221701327113095_3881835489772381977_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSi_3MAFhjmVgIzQLwsrCF7XgTb8zToVNDXrro0qgNwRQ&oe=6513B07A&_nc_sid=000000&_nc_cat=103" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Muhammad Ahsan</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/372900168_681711970207053_6712394342078356468_n.jpg?ccb=11-4&oh=01_AdTLzOau8ZFINcPVHHqWGqNPTA5KX0dXvH3kV1KBxdItdQ&oe=6513AC4C&_nc_sid=000000&_nc_cat=109" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Bilal</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/361684211_835161781530293_4703548436617093960_n.jpg?ccb=11-4&oh=01_AdSxu0HzQd9ZPoq84_7srCqXCuij2FTujITylP3JSezwvg&oe=65138C2F&_nc_sid=000000&_nc_cat=109" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Uzair</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/370406844_2339091826273158_8037098315376606771_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdT9A0-aYk-vlU1adk-e_00qJ5T5qdGl_6eX1ZWNQ5S9wg&oe=65118C33&_nc_sid=000000&_nc_cat=101" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Zakir ullah</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/324795777_679448700897694_5946745351383215676_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdT4NJC37qBTEVWqW9CQWx4mOpuPSx2deq4obhPWx0hIyA&oe=6512CB6D&_nc_sid=000000&_nc_cat=106" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Muhammad Ashhad</span>
          </li>
        </ul>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/365461372_1340314713555670_8064305130830660857_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQBg4wOytN3i7XPX4brC0raMQcmYZP8WVFQNlwILmbyTQ&oe=6512E6C9&_nc_sid=000000&_nc_cat=110" alt="Friend Image" className="sideBarFriendImg" />
            <span className="sideBarFriendName">Muhaimin</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
