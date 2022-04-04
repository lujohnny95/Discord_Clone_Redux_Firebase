import { Avatar } from '@material-ui/core'
import "./Message.css"

const Message = () => {
  return (
    <div className='message'>
        <Avatar />
        <div className='message-info'>
            <h4>
                J Pro
                <span className='message-timestamp'>New timestamp</span>
            </h4>

            <p>This is my message</p>
        </div>
    </div>
  )
}

export default Message