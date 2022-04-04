import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar" 
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
