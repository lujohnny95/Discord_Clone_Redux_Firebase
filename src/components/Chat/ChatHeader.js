import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from "@material-ui/icons";
import "./ChatHeader.css";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
        <div className="chatHeader-left">
            <h3>
                <span className="chatHeader-hash">#</span>
                Test Channel Name
            </h3>
        </div>

        <div className="chatHeader-right">
            <Notifications />
            <EditLocationRounded />
            <PeopleAltRounded />

            <div className="chatHeader-search">
                <input placeholder="Search" />
                <SearchRounded />
            </div>

            <SendRounded />
            <HelpRounded />
        </div>
    </div>
  )
}

export default ChatHeader