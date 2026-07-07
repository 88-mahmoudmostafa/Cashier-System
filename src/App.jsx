import Card from "./component/Card"
import Product from "./component/Product"
import Header from "./component/Header"
import './App.css'
function App() {
  return (
    <div className="hero">
      <Header/>
    <div className="app">
      <Product/>
      <Card/>

    </div>
    </div>
  )
}

export default App