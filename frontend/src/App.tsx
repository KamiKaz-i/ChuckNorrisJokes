import './App.css'
import {
  Outlet,
} from '@tanstack/react-router'
function App() {


  return (
    <div className='container'>
      <Outlet />
    </div>
  )
}

export default App
