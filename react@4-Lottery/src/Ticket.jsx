import TicketNum from "./TicketNum.jsx"

const Ticket = ({ticket}) => {
  return (
    <div className="border border-solid border-pink-500 w-96 rounded-lg mb-10">
      <p>Ticket</p>
      {
      ticket.map((num,inx)=>(
        <TicketNum num={num} key={inx}/>
      ))}
    </div>
  );
}

export default Ticket
  