import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import Register from './components/Register';
import Cart from './components/Cart';
import Support from './components/Support';
import Wishlist from './components/Wishlist';
import Men from './components/Men';
import Women from './components/Women';
import Footer from './components/Footer';
import Kids from './components/Kids';
import Shoe from './components/Shoe';
import Summer from './components/Summer';
import Sale from './components/Sale';
import Sportaccess from './components/Sportaccess';
import Sportequip from './components/Sportequip';
import Trek from './components/Trek';
import { CartProvider } from './components/CartContext';
import MyProfile from './components/MyProfile';
import Payment from './components/Payment';
import { UserProvider } from './components/UserContext';
import { WishlistProvider } from './components/WishlistContext';
import RegistrationPage from './components/Registration';

const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

const App = () => (
  <UserProvider>
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Homepage /></Layout>} />
            <Route path="/homepage" element={<Layout><Homepage /></Layout>} />
            <Route path="/signin" element={<Layout><Signin /></Layout>} />
            <Route path="/register" element={<Layout><Register /></Layout>} />
            <Route path="/cart" element={<Layout><Cart /></Layout>} />
            <Route path="/wishlist" element={<Layout><Wishlist /></Layout>} />
            <Route path="/payment" element={<Layout><Payment /></Layout>} />
            <Route path="/support" element={<Layout><Support /></Layout>} />
            <Route path="/myprofile" element={<Layout><MyProfile /></Layout>} />
            <Route path="/men" element={<Layout><Men /></Layout>} />
            <Route path="/women" element={<Layout><Women /></Layout>} />
            <Route path="/kids" element={<Layout><Kids /></Layout>} />
            <Route path="/shoes" element={<Layout><Shoe /></Layout>} />
            <Route path="/summer" element={<Layout><Summer /></Layout>} />
            <Route path="/sale" element={<Layout><Sale /></Layout>} />
            <Route path="/accessories" element={<Layout><Sportaccess /></Layout>} />
            <Route path="/equipment" element={<Layout><Sportequip /></Layout>} />
            <Route path="/trek" element={<Layout><Trek /></Layout>} />
            <Route path="/reg" element={<Layout><RegistrationPage /></Layout>} />
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  </UserProvider>
);

export default App;
