import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../../features/appSlice";
import { selectUser } from "../../features/userSlice";
import firebase from "firebase/compat/app";
import db from "../../firebase";
import Message from "../Message/Message";
import ChatHeader from "./ChatHeader";
import "./Chat.css";

const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [textInput, setTextInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            )
        }
    }, [channelId])

    const sendMessage = e => {
        e.preventDefault()

        db.collection("channels").doc(channelId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: textInput,
            user: user,
        })

        setTextInput("");
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
                        value={textInput}  
                        disabled={!channelId}
                        onChange={(e) => setTextInput(e.target.value)}
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