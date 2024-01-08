import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Screen6 from "./pages/Screen6";
import Screen7 from "./pages/Screen7";
import MainScreen1 from "./pages/MainScreen1";
import MainScreen2 from "./pages/MainScreen2";
import HealthScreen from "./pages/HealthScreen";
import MainScreen3 from "./pages/MainScreen3";
import MainScreen from "./pages/MainScreen";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();

    // Function to read the content
    const speakText = (text) => {
      utterance.text = text;
      synth.speak(utterance);
    };

    // Text content for each page
    let content = "";
    switch (pathname) {
      case "/":
        content = "Welcome to Self-service Health Kiosk. PRESS OR TAP 1 TO START";
        break;
      case "/screen-1":
        content = "YOU ARE NOW ON THE VITAL SIGNS. MEASURE YOUR VITAL SIGNS BY SELECTING OPTIONS BELOW. TEMPERATURE, PRESS 1. O2 SATURATION, PRESS 2. HEART RATE, MMHG SYSTOLIC BP, AND MMHG DIASTOLIC BP, PRESS 3.";
        break;
      case "/screen-2":
        content = "HEART RATE. PLEASE PUT YOUR RIGHT ARM ON THE DEDICATED ARM REST IN THE RIGHT OF THE KIOSK. PRESS 3 TO START";
        break;
      case "/screen-3":
        content = "TEMPERATURE. PLEASE PUT YOUR FOREHEAD NEAR THE KIOSK TO DETECT THE TEMPERATURE. PRESS 3 TO START";
        break;
      case "/screen-4":
        content = "O2 SATURATION. PLEASE PUT YOUR LEFT INDEX FINGER INSIDE THE PULSE OXIMETER FOR 1 MIONUTE TO MEASURE YOUR HEART RATE. PRESS 3 TO START.";
        break;
      case "/screen-5":
        content = "This is Screen 5. This is the content of Screen 5.";
        break;
      case "/screen-6":
        content = "This is Screen 6. This is the content of Screen 6.";
        break;
      case "/screen-7":
        content = "This is Screen 7. This is the content of Screen 7.";
        break;
      default:
        break;
    }

    // Speak the content when the page changes
    speakText(content);

    // Cleanup the speech synthesis on unmount
    return () => {
      synth.cancel();
    };
  }, [pathname]);

  return (
    <div style={{ width: 1280, height: 760 }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/screen-6" element={<Screen6 />} />
        <Route path="/screen-7" element={<Screen7 />} />
        <Route path="/screen-5" element={<MainScreen1 />} />
        <Route path="/screen-4" element={<MainScreen2 />} />
        <Route path="/screen-3" element={<HealthScreen />} />
        <Route path="/screen-2" element={<MainScreen3 />} />
        <Route path="/screen-1" element={<MainScreen />} />
      </Routes>
    </div>
  );
}

export default App;
