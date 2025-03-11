import {useState} from 'react'
import {genTicket,sum} from './helper.js'
import Ticket from './Ticket.jsx';

const Lottery = ({n=3,WinningSum=15}) => {
    let [ticket ,setTicket]= useState(genTicket(n));
    let isWinning = sum(ticket)===WinningSum;
    let buyTicket= ()=>{
        setTicket(genTicket(n));
    }

  return (
    <div >
      <h1>Lottery Game</h1>
      <div className=' mt-4 '>
      <Ticket ticket={ticket}/>
      </div>
      <button className='mt-4' onClick={buyTicket}>BuyTicket</button>
      <h3 className='mt-4'>{isWinning && "congratulations! you win"}</h3>
    </div>
  )
}
export default Lottery
