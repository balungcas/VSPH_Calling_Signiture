
import React from 'react';
import { SignatureData } from '../../types';

const AxonometricSlice: React.FC<{ data: SignatureData }> = ({ data }) => {
  const hasContact = data.email || data.phone || data.website;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: '#000' }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
        <tr>
          {data.imageUrl && (
            <td style={{ width: '140px', verticalAlign: 'top', position: 'relative', paddingRight: '40px' }}>
              <div style={{ position: 'absolute', top: '0', right: '20px', width: '1px', height: '100%', background: '#000', opacity: 0.1 }}></div>
              <div style={{ position: 'absolute', bottom: '10px', left: '-10px', width: '100%', height: '1px', background: '#000', transform: 'rotate(-5deg)', transformOrigin: 'left' }}></div>
              <img 
                src={data.imageUrl} 
                width="140" 
                style={{ filter: 'grayscale(100%) brightness(0.9)', display: 'block', border: '1px solid #000' }}
                alt={data.name}
              />
            </td>
          )}
          <td style={{ verticalAlign: 'middle' }}>
            {data.name && (
              <div style={{ fontSize: '28px', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase', borderBottom: '4px solid #000', display: 'inline-block', marginBottom: '8px' }}>
                {data.name}
              </div>
            )}
            {(data.role || data.company) && (
              <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', color: '#666', marginBottom: '25px', textTransform: 'uppercase' }}>
                {data.role}{data.role && data.company ? ' // ' : ''}{data.company}
              </div>
            )}
            
            {hasContact && (
              <div style={{ display: 'flex', gap: '20px' }}>
                <table cellPadding="0" cellSpacing="0" style={{ fontSize: '11px', lineHeight: '2' }}>
                  {data.email && (
                    <tr>
                      <td style={{ fontWeight: 'bold', paddingRight: '15px' }}>EMAIL</td>
                      <td>{data.email}</td>
                    </tr>
                  )}
                  {data.phone && (
                    <tr>
                      <td style={{ fontWeight: 'bold', paddingRight: '15px' }}>DIR_T</td>
                      <td>{data.phone}</td>
                    </tr>
                  )}
                  {data.website && (
                    <tr>
                      <td style={{ fontWeight: 'bold', paddingRight: '15px' }}>SITE_</td>
                      <td>{data.website}</td>
                    </tr>
                  )}
                </table>
              </div>
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AxonometricSlice;
