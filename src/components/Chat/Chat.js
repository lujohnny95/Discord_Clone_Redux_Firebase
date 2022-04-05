import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../../features/appSlice";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";
import Message from "../Message/Message";
import "./Chat.css";
import ChatHeader from "./ChatHeader";

const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy("timestampe", "desc")
                .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            )
        }
    }, [])

    const sendMessage = e => {
        e.preventDefault()

        db.collection("channels").doc(channel(Id).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
            message: input,
            user: user,
        })
        )
    }

    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />

            <div className="chat-messages">
                {messages.map((message) => (
                    <Message 
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
            </div>

            <div className="chat-input">
                <AddCircle fontSize="large" />
                <form>
                    <input 
                        placeholder={`Message #${channelName}`} 
                        value={input}  
                        disabled={!channelId}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button 
                        className="chat-inputButton" 
                        type="submit"
                        disabled={!channelId}
                        onClick={sendMessage}
                    >   
                        Send Message
                    </button>            
                </form>
                <div className="chat-inputIcons">
                    <CardGiftcard fontSize="large" />
                    <Gif fontSize="large" />
                    <EmojiEmotions fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat