import Clock from "./Clock";
import Message from "./Message";

function App() {
  return (
    <div>
      <Message messageText= "Local Time" />
      <Clock />
    </div>
  );
}

export default App;