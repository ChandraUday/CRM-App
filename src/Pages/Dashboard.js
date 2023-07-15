import React from 'react'
import TicketCard from '../Components/TicketCard'

function Dashboard() {
  return (
    <div className='dashboard'>
        <h1>CRM DATABASE</h1>
        <div className="ticket-container">
          <TicketCard/>
        </div>
    </div>
  )
}

export default Dashboard