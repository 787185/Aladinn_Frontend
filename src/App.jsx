import { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./components/Services";
import Aboutpage from "./pages/About";
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { useTheme } from '@mui/material';
import { tokens } from "../theme"; 

function App(){
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    // Function to run when consent is accepted
  const handleAcceptCookie = () => {

    console.log("Cookies Accepted!");
  };

  // Function to run when consent is declined
    const handleDeclineCookie = () => {
      console.log("Cookies Declined!");
      Cookies.remove("_ga"); 
    };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<Aboutpage />} />
        </Routes>

        <CookieConsent
          debug={true}
          location="bottom"
          buttonText="Accept All Cookies"
          declineButtonText="Decline"
          enableDeclineButton
          cookieName="myWebsiteCookieConsent"
          style={{
            background: '#d6d6d6',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center',    
            padding: '5px'          
          }}
          buttonStyle={{
            background: colors.greenAccent[400],
            color: colors.grey[100],
            fontSize: "13px",
            borderRadius: "30px",
            display: 'block',      
            width: 'fit-content',  
            margin: '5px auto'    
          }}
          declineButtonStyle={{
            background: colors.redAccent[700],
            color: colors.grey[100],
            fontSize: "13px",
            borderRadius: "30px",
            
            display: 'block',
            width: 'fit-content',
            margin: '5px auto'
          }}
          contentStyle={{
            color: colors.grey[800], 
            textAlign: 'center',
            marginBottom: '0px' 
          }}
          expires={365}
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
        >
          This website uses cookies to enhance the user experience and analyze performance. By clicking "Accept All Cookies", you agree to our use of cookies. For more information, please read our {" "}
          <a href="/privacy-policy" style={{ color: colors.blueAccent[300], textDecoration: 'underline' }}>Privacy Policy</a>.<br/>
        </CookieConsent>
      </main>
      <Footer />
    </div>
  )
}

export default App;


