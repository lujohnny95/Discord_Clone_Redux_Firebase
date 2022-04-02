import { ExpandMore } from "@material-ui/icons"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-top'>
            <h3>Tech Connect</h3>
            <ExpandMore />
        </div>

        <div className="sidebar-channel">
          <div className="sidebar-channelsHeader">
            <div className="sidebar-header">
              <ExpandMore />
              <h4>Text channels</h4>

              <AddIcon className="sidebar-addChannel" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar