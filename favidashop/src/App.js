import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Modal from './components/Modal';
import Home from './components/Home';
import Categories from './components/Categories';
import Featured from './components/Featured';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Modal />
      <Home />
      <Categories />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
