import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/footer';
import './App.css'


function App() {
  return (
    <>
    <Nav/>
    <main className='mx-3'>
      <Outlet />
    <Footer></Footer>
    </main>
    </>
  )
}

export default App;