import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';
import QRCodeScanner from './QRCodeScanner'; // QRCodeScanner 컴포넌트 파일을 import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeGenerator />} /> {/* QRCodeGenerator 페이지 */}
        <Route path="/qrcodescanner" element={<QRCodeScanner />} /> {/* QRCodeScanner 페이지 */}
      </Routes>
    </Router>
  );
};

export default App;