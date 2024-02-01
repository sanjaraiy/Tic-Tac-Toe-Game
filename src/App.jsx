import Card from "./components/Card/Card"
import './App.css'
import Grid from "./components/Grid/Grid"
function App() {
  return (
    <div className="app">
      {/* <Card player="X"></Card> */}
      <Grid numberOfCards={9}></Grid>
    </div>
  )
}

export default App
