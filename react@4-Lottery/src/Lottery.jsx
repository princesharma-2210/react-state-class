import {useState} from 'react'
import {genTicket,sum} from './helper.js'
const Lottery = () => {
    let [ticket ,setTicket]= useState(genTicket(3));
    let isWinning = sum(ticket)===15;
    let buyTicket= ()=>{
        setTicket(genTicket(3));
    }

  return (
    <div >
      <h1>Lottery Game</h1>
      <div className='border-solid border-2 mt-4 '>
      <span>{ticket[0]}</span>
      <span>{ticket[1]}</span>
      <span>{ticket[2]}</span>
      </div>
      <button className='mt-4' onClick={buyTicket}>BuyTicket</button>
      <h3 className='mt-4'>{isWinning && "congratulations! you win"}</h3>
    </div>
  )
}
export default Lottery
