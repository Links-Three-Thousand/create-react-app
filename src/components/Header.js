import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Contact from './Contact';
import Products from './Product';
import Services from './Services';

function Header() {
    return (
        <Router>
        <nav className="fh5co-nav" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-2">
                <Link to="/"> <img className="logo" src="/assets/images/logo.png" width="150px" /></Link>
              </div>
              <div className="col-md-6 col-xs-6 text-center menu-1">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/product">Our Products</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-4 text-right hidden-xs menu-2">
                <ul>
                  <li className="search">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button"><a href="https://twitter.com" /><i className="icon-twitter" /></button>
                        <button className="btn btn-primary" type="button"><a href="https://facebook.com" /><i className="icon-facebook" /></button>
                        <button className="btn btn-primary" type="button"><a href="https://linkedin.com" /><i className="icon-linkedin" /></button>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
        </Routes>
        </Router>
      );
  }
  
  export default Header;
  