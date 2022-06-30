import "./App.css"
import Card from "./components/card/Card";
import Header from './components/header/Header';


const App = () => {
  return (
    <div className="container">
      <Header/>
      <Card/>
    </div>
  )
}
export default App