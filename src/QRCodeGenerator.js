import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode-generator';
import './background.css'

const QRCodeGenerator = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [part, setPart] = useState('');
  const [qrCodeImage, setQRCodeImage] = useState('');

  const generateQRCode = () => {
    // const qrData = `이름: ${name}, 기수: ${number}, 파트: ${part}`;
    const qrData = `Name: ${name}, Number: ${number}, Part: ${part}`;
    const typeNumber = 4;
    const errorCorrectionLevel = 'L';

    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(qrData);
    qr.make();

    setQRCodeImage(qr.createDataURL(6, 10));
  };

  return (
    <div className='my-container'>
      <div style={{padding: '15px', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', }}>
        {/* <h1>QR Code Generator</h1> */}
        <div>
          <label htmlFor="name" style={{fontSize: '25px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>이름(영문): </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{width: '200px', height: '20px'}}
          />
        </div>
        <div>
          <label htmlFor="number" style={{fontSize: '25px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>기수(숫자): </label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            style={{width: '200px', height: '20px'}}
          />
        </div>
        <div>
          <label htmlFor="part" style={{fontSize: '25px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>파트(영문): </label>
          <input
            type="text"
            id="part"
            value={part}
            onChange={(e) => setPart(e.target.value)}
            required
            style={{width: '200px', height: '20px'}}
          />
        </div>
        <br></br>
        <button onClick={generateQRCode} style={{fontSize: '25px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>QR 코드 생성</button>
        <div>
          {qrCodeImage && (
            <img src={qrCodeImage} alt="Generated QR Code" />
          )}
        </div>

        <Link to="/qrcodescanner" style={{fontSize: '25px', textDecoration: 'none', marginTop: '20px', display: 'block', fontFamily: 'NanumGothic', padding: '5px', backgroundColor: 'white', borderRadius: '5px', fontWeight: 'bold'}}>
          QR 코드 스캐너
        </Link>
      </div>
    </div>
  );
};

export default QRCodeGenerator;