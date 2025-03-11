import Lottery from './Lottery'
import './App.css'
// import Ticket from './Ticket'
function App() {

  return (
    <>
    <Lottery n={3} WinningSum={15} />
    <Lottery n={4} WinningSum={20} />
    </>
  )
}

export default App
