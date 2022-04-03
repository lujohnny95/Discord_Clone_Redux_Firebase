import { Avatar } from "@material-ui/core"
import { ExpandMore, Add, SignalCellularAlt, InfoOutlined, Call, Mic, Headset, Settings } from "@material-ui/icons"
import "./Sidebar.css"
import SidebarChannel from "./SidebarChannel"

const Sidebar = () => {
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
            <Add className="sidebar-addChannel" />
          </div>

          <div className="sidebar-channelsList">
            <SidebarChannel />
            <SidebarChannel />
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
          <Avatar />
          <div className="sidebar-profileInfo">
            <h3>@JPro</h3>
            <p>#thisIsMyID</p>
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