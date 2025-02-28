import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent1';
import ProductCategory from './ProductCategory';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './About';




function App() {
  return (
    <div className="App">
         {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React js</h1>
      </header> */}
      {/* <ProductCategory/> */}
      {/* <MyComponent/> */}
      {/* <ContactUs/> */}
  
       <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductCategory />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 
