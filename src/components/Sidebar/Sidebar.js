import { useEffect, useState } from "react"
import { Avatar } from "@material-ui/core"
import { ExpandMore, Add, SignalCellularAlt, InfoOutlined, Call, Mic, Headset, Settings } from "@material-ui/icons"
import SidebarChannel from "./SidebarChannel"
import { useSelector } from "react-redux"
import { selectUser } from "../../features/userSlice"
import db, { auth } from "../../firebase"
import "./Sidebar.css"

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        channel: doc.data()
      }))
      )
    })
  }, [])
  
  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className='sidebar'>
        <div className='sidebar-top'>
            <h3>Tech Connect</h3>
            <ExpandMore />
        </div>
        {/* sidebar channels section */}
        <div className="sidebar-channel">
          <div className="sidebar-channelsHeader">
            <div className="sidebar-header">
              <ExpandMore />
              <h4>Text channels</h4>
            </div>
            <Add className="sidebar-addChannel" onClick={handleAddChannel} />
          </div>

          <div className="sidebar-channelsList">
            {channels.map((channel) => (
              <SidebarChannel />
            ))}
          </div>
        </div>
        {/* voice section */}
        <div className="sidebar-voice">
          <SignalCellularAlt className="sidebar-voiceIcon" fontSize="large" />
          <div className="sidebar-voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>
          <div className="sidebar-voiceIcons">
            <InfoOutlined />
            <Call />
          </div>
        </div>

        {/* sidebar profile */}
        <div className="sidebar-profile">
          <Avatar src={user.photo} onClick={() => auth.signOut()} />
          <div className="sidebar-profileInfo">
            <h3>{user.displayName}</h3>
            <p>#{user.uid}</p>
          </div>
          <div className="sidebar-profileIcons">
            <Mic />
            <Headset/>
            <Settings />
          </div>
        </div>
    </div>
  )
}

export default Sidebar