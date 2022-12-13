import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/persons/2.jpeg" alt=""/>
            <span className="sidebarFriendName">Dan Ebby</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/persons/3.jpeg" alt=""/>
            <span className="sidebarFriendName">Zack Low</span>
          </li>          
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/persons/4.jpeg" alt=""/>
            <span className="sidebarFriendName">Warri Ann</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/persons/5.jpeg" alt=""/>
            <span className="sidebarFriendName">Jane  Carr</span>
          </li> 
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/persons/6.jpeg" alt=""/>
            <span className="sidebarFriendName">Saint Obi</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/persons/7.jpeg" alt=""/>
            <span className="sidebarFriendName">Dawud Tan</span>
          </li>
        
        </ul>
      </div>
    </div>
  );
}