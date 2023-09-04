
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import BookingPage from './BookingPage';
import About from './About';
import Menu from './Menu';
import Login from './Login';
import OrderOnline from './OrderOnline';
import ConfirmedBooking from './ConfirmedBooking';

function Main() {

    return (
        <main>
            <Router>
                <Routes> 
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Menu" element={<Menu />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                    <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
                    <Route path="/OrderOnline" element={<OrderOnline />}></Route>
                    <Route path="/Login" element={<Login/> }></Route>
                </Routes>
            </Router>
        </main>
    )
}

export default Main;
