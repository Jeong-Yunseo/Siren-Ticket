// import React, { useState } from 'react';
// import QrScanner from 'react-qr-scanner';
// import { Link } from 'react-router-dom';

// const QRCodeScanner = () => {
//   const [scannedData, setScannedData] = useState(null);

//   const handleScan = (result) => {
//     if (result) {
//       setScannedData(result.text);
//     }
//   };

//   const handleError = (error) => {
//     console.error(error);
//   };

//   const handleRescan = () => {
//     setScannedData(null); // 스캔 데이터 초기화하여 다시 스캔 가능하게
//   }

//   return (
//     <div className='qr-scan-container' style={{marginLeft: '10px'}}>
//       <h1 style={{marginLeft: '10px'}}>QR Code Scanner</h1>
//       <QrScanner
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: '50%' }}
//       />
//       <div style={{ marginTop: '20px', fontSize: '20px' }}>
//         {scannedData && (
//           <>
//             {/* <p>스캔된 데이터:</p>
//             <p>{scannedData}</p> */}
//             {/* 파싱된 데이터 화면에 표시 */}
//             {scannedData.includes('Name') && scannedData.includes('Number') && scannedData.includes('Part') ? (
//               <>
//                 <p style={{fontSize: '25px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>이름: {scannedData.match(/Name: ([\w\s]+)/)[1]}</p>
//                 <p style={{fontSize: '25px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>기수: {scannedData.match(/Number: ([\w\s]+)/)[1]}기</p>
//                 <p style={{fontSize: '25px', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>파트: {scannedData.match(/Part: ([\w\s]+)/)[1]}</p>
//               </>
//             ) : (
//               <p>유효한 데이터가 아닙니다.</p>
//             )}
//           </>
//         )}
//       </div>
//       {scannedData && (
//         <button onClick={handleRescan} style={{fontSize: '20px', marginTop: '20px'}}>
//             QR 코드 다시 스캔
//         </button>
//       )

//       }
//       <Link to="/" style={{fontSize: '25px', textDecoration: 'none', marginTop: '20px', display: 'block', fontFamily: 'NanumGothic', fontWeight: 'bold'}}>
//         QR 코드 생성기
//       </Link>
//     </div>
//   );
// };

// export default QRCodeScanner;

import React, { useState, useEffect } from 'react';
import QrScanner from 'react-qr-scanner';
import { Link } from 'react-router-dom';

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState(null);
  const [showData, setShowData] = useState(false);

  const handleScan = (result) => {
    if (result) {
      setScannedData(result.text);
      setShowData(true);

      // 5초 후에 데이터 숨기기
      setTimeout(() => {
        setShowData(false);
      }, 3000);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleRescan = () => {
    setScannedData(null);
    setShowData(false);
  };

  useEffect(() => {
    // 컴포넌트가 unmount 되면 타이머를 클리어합니다.
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div className='qr-scan-container' style={{ marginLeft: '10px' }}>
      <h1 style={{ marginLeft: '10px' }}>QR Code Scanner</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '50%' }}
      />
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        {showData && scannedData && (
          <>
            {scannedData.includes('Name') &&
            scannedData.includes('Number') &&
            scannedData.includes('Part') ? (
              <>
                <p style={{ fontSize: '25px', fontFamily: 'NanumGothic', fontWeight: 'bold' }}>
                  SIREN {scannedData.match(/Number: ([\w\s]+)/)[1]}기 {scannedData.match(/Part: ([\w\s]+)/)[1]} {scannedData.match(/Name: ([\w\s]+)/)[1]}님
                </p>
                <p style={{ fontSize: '25px', fontFamily: 'NanumGothic', fontWeight: 'bold' }}>
                  SIREN 22기 정기 공연에 오신 것을 환영합니다!
                </p>
              </>
            ) : (
              <p>유효한 데이터가 아닙니다.</p>
            )}
          </>
        )}
      </div>
      <button onClick={handleRescan} style={{ fontSize: '20px', marginTop: '20px' }}>
        QR 코드 다시 스캔
      </button>
      <Link
        to="/"
        style={{
          fontSize: '25px',
          textDecoration: 'none',
          marginTop: '20px',
          display: 'block',
          fontFamily: 'NanumGothic',
          fontWeight: 'bold',
        }}
      >
        QR 코드 생성기
      </Link>
    </div>
  );
};

export default QRCodeScanner;
