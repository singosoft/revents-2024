import { useState } from 'react'

import EventDashboard from '../../features/events/dashboard/EventDashboard'
import Navbar from './nav/Navbar'
import { Container } from 'semantic-ui-react'


export default function App() {
  const [count, setCount] = useState(0)
  const [formOpen , SetFormOpen] = useState(false)

  return (
  //  <div className='app' style={{marginTop: '10px'}}>Welcome to Revents</div>
  <>
      <Navbar setFormOpen={SetFormOpen}/>
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={ SetFormOpen} />
      </Container>
  </>
  )
}
