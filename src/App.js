import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar" 
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login/Login";

function App() {
  // pulling the user from userslice
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
