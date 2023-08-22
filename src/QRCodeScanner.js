import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { Link } from 'react-router-dom';

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setScannedData(result.text);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleRescan = () => {
    setScannedData(null); // 스캔 데이터 초기화하여 다시 스캔 가능하게
  }

  return (
    <div style={{marginLeft: '10px'}}>
      <h1 style={{marginLeft: '10px'}}>QR Code Scanner</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '50%' }}
      />
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        {scannedData && (
          <>
            <p>스캔된 데이터:</p>
            <p>{scannedData}</p>
            {/* 파싱된 데이터 화면에 표시 */}
            {scannedData.includes('Name') && scannedData.includes('Number') && scannedData.includes('Part') ? (
              <>
                <p>이름: {scannedData.match(/Name: ([\w\s,]+)/)[1]}</p>
                <p>기수: {scannedData.match(/Number: ([\w\s,]+)/)[1]}</p>
                <p>파트: {scannedData.match(/Part: ([\w\s,]+)/)[1]}</p>
              </>
            ) : (
              <p>유효한 데이터가 아닙니다.</p>
            )}
          </>
        )}
      </div>
      {scannedData && (
        <button onClick={handleRescan} style={{fontSize: '20px', marginTop: '20px'}}>
            QR 코드 다시 스캔
        </button>
      )

      }
      <Link to="/" style={{fontSize: '20px', textDecoration: 'none', marginTop: '20px', display: 'block'}}>
        QR 코드 생성기
      </Link>
    </div>
  );
};

export default QRCodeScanner;
