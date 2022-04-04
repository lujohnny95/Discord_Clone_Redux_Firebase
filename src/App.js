import React, { useEffect } from "react";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar" 
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Login/Login";
import "./App.css";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
