import { Avatar } from '@material-ui/core'
import "./Message.css"

const Message = ({ timestamp, user, message }) => {
  return (
    <div className='message'>
        <Avatar />
        <div className='message-info'>
            <h4>
                {user.displayName}
                <span className='message-timestamp'>
                  {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>

            <p>This is my message</p>
        </div>
    </div>
  )
}

export default Message