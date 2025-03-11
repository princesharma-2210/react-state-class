import Lottery from './Lottery'
import './App.css'
import {sum} from './helper.js'
// import Ticket from './Ticket'
function App() {
  function WinCondition(ticket){
    // return sum(ticket)===15;
    return ticket.every((num)=>num===ticket[0]);
  };
  return (
    <>
    <Lottery n={3} WinCondition={WinCondition} />
    {/* <Lottery n={4} WinningSum={20} /> */}
    </>
  )
}

export default App
