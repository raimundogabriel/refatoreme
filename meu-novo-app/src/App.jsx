import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from "./components/footer/Footer"

function App (){
    return(
            <Router>
                <Header />
                <Routes>
                    <Route path="/" emelemt={<Home />}></Route>
                    
                </Routes>

                <Footer />
            </Router>
    )
}

export default App;