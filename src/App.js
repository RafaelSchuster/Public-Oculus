import './App.css';
import Main from "../src/pages/mainpage"

function App() {
  require('dotenv').config()
  console.log()
  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
