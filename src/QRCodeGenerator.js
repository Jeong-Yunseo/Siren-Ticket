// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import QRCode from 'qrcode-generator';
// import './background.css'

// const QRCodeGenerator = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const [part, setPart] = useState('');
//   const [qrCodeImage, setQRCodeImage] = useState('');

//   const generateQRCode = () => {
//     // const qrData = `이름: ${name}, 기수: ${number}, 파트: ${part}`;
//     const qrData = `Name: ${name}, Number: ${number}, Part: ${part}`;
//     const typeNumber = 4;
//     const errorCorrectionLevel = 'L';

//     const qr = QRCode(typeNumber, errorCorrectionLevel);
//     qr.addData(qrData);
//     qr.make();

//     setQRCodeImage(qr.createDataURL(6, 10));
//   };

//   return (
//     <div className='my-container'>
//       <div>
//         {/* <h1>QR Code Generator</h1> */}
//         <div style={{margin: '15px'}}>
//           <label htmlFor="name" style={{fontSize: '20px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>이름(영문): </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             style={{width: '250px', height: '20px'}}
//           />
//         </div>
//         <div style={{margin: '15px'}}>
//           <label htmlFor="number" style={{fontSize: '20px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>기수(숫자): </label>
//           <input
//             type="text"
//             id="number"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             required
//             style={{width: '250px', height: '20px'}}
//           />
//         </div>
//         <div style={{margin: '15px'}}>
//           <label htmlFor="part" style={{fontSize: '20px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>파트(영문): </label>
//           <input
//             type="text"
//             id="part"
//             value={part}
//             onChange={(e) => setPart(e.target.value)}
//             required
//             style={{width: '250px', height: '20px'}}
//           />
//         </div>
//         <button onClick={generateQRCode} style={{fontSize: '20px', fontFamily: 'NanumGothic', fontWeight: 'bold', margin: '15px'}}>QR 코드 생성</button>
//         <div>
//           {qrCodeImage && (
//             <img src={qrCodeImage} alt="Generated QR Code" />
//           )}
//         </div>

//         <Link to="/qrcodescanner" style={{margin: '15px', fontSize: '20px', textDecoration: 'none', marginTop: '20px', display: 'block', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>
//           QR 코드 스캐너
//         </Link>
//       </div>
//       <div><br></br><br></br></div>
//     </div>
//   );
// };

// export default QRCodeGenerator;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode-generator';
import './background.css';

const QRCodeGenerator = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [part, setPart] = useState('');
  const [qrCodeImage, setQRCodeImage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const generateQRCode = () => {
    if (!name || !number || !part) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);

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
      <div>
        <div style={{ margin: '15px' }}>
          <label htmlFor="name" style={{ fontSize: '20px', fontFamily: 'NanumGothic', fontWeight: 'bold' }}>이름(영문): </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '250px', height: '20px' }}
          />
        </div>
        <div style={{ margin: '15px' }}>
          <label htmlFor="number" style={{ fontSize: '20px', fontFamily: 'NanumGothic', fontWeight: 'bold' }}>기수(숫자): </label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            style={{ width: '250px', height: '20px' }}
          />
        </div>
        <div style={{ margin: '15px' }}>
          <label htmlFor="part" style={{ fontSize: '20px', fontFamily: 'NanumGothic', fontWeight: 'bold' }}>파트(영문): </label>
          <input
            type="text"
            id="part"
            value={part}
            onChange={(e) => setPart(e.target.value)}
            required
            style={{ width: '250px', height: '20px' }}
          />
        </div>
        <button onClick={generateQRCode} style={{ fontSize: '20px', fontFamily: 'NanumGothic', fontWeight: 'bold', margin: '15px' }}>QR 코드 생성</button>
        
        {showAlert && (
          <p style={{ color: 'red' }}>모든 필드를 입력하세요.</p>
        )}

        {qrCodeImage && (
          <div>
            <img src={qrCodeImage} alt="Generated QR Code" />
          </div>
        )}

        <Link to="/qrcodescanner" style={{ margin: '15px', fontSize: '20px', textDecoration: 'none', marginTop: '20px', display: 'block', fontFamily: 'NanumGothic', fontWeight: 'bold' }}>
          QR 코드 스캐너
        </Link>
      </div>
      <div><br /><br /></div>
    </div>
  );
};

export default QRCodeGenerator;