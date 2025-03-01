import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent1';
import ProductCategory from './ProductCategory';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './About';
import Registration from './Registration';
import Car from './ClassComp';
import ProductList from './ProductList';
import Football from './Football';
import StyledComponent from './StyledComponent';
import StyledComponent2 from './StyledComponent2';
import StyledComponent3 from './StyledComponent3';
import StyledComponentClass from './StyledComponentClass';
import StyledComponent4 from './StyledComponent4';





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


        <StyledComponent4/>
       {/* <StyledComponent3/>
      <StyledComponent2/>
      <StyledComponent/> 
      <StyledComponentClass/> */}




       {/* <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductCategory />} />
           <Route path="registration" element={<Registration />} />    
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
        <Car/>
        <Football/>
        <ProductList/> */}
    </div>
  );
}

export default App;
 
