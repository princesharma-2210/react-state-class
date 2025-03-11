import {useState} from 'react'
import {genTicket,sum} from './helper.js'
import Ticket from './Ticket.jsx';
import {Button} from './Button.jsx'

const Lottery = ({n=3,WinCondition}) => {
    let [ticket ,setTicket]= useState(genTicket(n));
    let isWinning = WinCondition(ticket);
    let buyTicket= ()=>{
        setTicket(genTicket(n));
    }

  return (
    <div >
      <h1>Lottery Game</h1>
      <div className=' mt-4 '>
      <Ticket ticket={ticket}/>
      </div>
      <Button action={buyTicket}/>
      <h3 className='mt-4'>{isWinning && "congratulations! you win"}</h3>
    </div>
  )
}
export default Lottery
