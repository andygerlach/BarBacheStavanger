import './App.css'
import Layout from './components/Layout.jsx'
import Hero from './components/Hero.jsx'
import OpenHours from './components/OpenHours.jsx'
import Tastings from './components/Tastings.jsx'
import WeeklyEvents from './components/WeeklyEvents.jsx'
import PremiumBookingCalendar from './components/Bookings.jsx'
import Contact from './components/Contact.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Hero />} />
    <Route path="openhours" element={<OpenHours />} />
    <Route path="tastings" element={<Tastings />} />
    <Route path="weeklyevents" element={<WeeklyEvents />} />
    <Route path="bookings" element={<PremiumBookingCalendar />} />
    <Route path="contact" element={<Contact />} />
  </Route>
),
{
  basename: "/BarBacheStavanger"
}
)

function App() {
  

  return (
    <div className="app">
      
      <RouterProvider router={router} /> 
        
      
    </div>
  )
}

export default App;
