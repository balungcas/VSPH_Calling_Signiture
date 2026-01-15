
import React from 'react';
import { SignatureData } from '../../types';

const DraftingDetail: React.FC<{ data: SignatureData }> = ({ data }) => {
  const hasContact = data.email || data.website || data.location || data.phone;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#000', maxWidth: '600px', margin: '0 auto' }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr>
          {data.imageUrl && (
            <td style={{ verticalAlign: 'top', width: '120px', paddingRight: '40px' }}>
              <div style={{ position: 'relative' }}>
                {/* Drafting Crosshairs */}
                <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '20px', height: '0.5px', background: '#000' }}></div>
                <div style={{ position: 'absolute', top: '-20px', left: '0', width: '0.5px', height: '20px', background: '#000' }}></div>
                <img 
                  src={data.imageUrl} 
                  width="120" 
                  height="150" 
                  style={{ 
                    filter: 'grayscale(100%) contrast(1.2)', 
                    WebkitFilter: 'grayscale(100%) contrast(1.2)',
                    objectFit: 'cover', 
                    display: 'block' 
                  }}
                  alt={data.name}
                />
                <div style={{ position: 'absolute', bottom: '-5px', right: '-5px', width: '10px', height: '10px', borderRight: '1px solid #000', borderBottom: '1px solid #000' }}></div>
              </div>
            </td>
          )}
          <td style={{ verticalAlign: 'top' }}>
            {data.name && (
              <div style={{ fontSize: '24px', fontWeight: 300, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2px' }}>
                {data.name}
              </div>
            )}
            {(data.role || data.company) && (
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '4px', color: '#999', textTransform: 'uppercase', marginBottom: '20px' }}>
                {data.role}{data.role && data.company ? ' — ' : ''}{data.company}
              </div>
            )}
            
            {hasContact && (
              <table cellPadding="0" cellSpacing="0" style={{ width: '100%', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', borderTop: '1px solid #000', paddingTop: '15px' }}>
                <tr>
                  <td style={{ color: '#000', lineHeight: '1.8' }}>
                    {data.email && (
                      <div><span style={{ color: '#ccc' }}>[M]</span> {data.email}</div>
                    )}
                    {data.website && (
                      <div><span style={{ color: '#ccc' }}>[W]</span> {data.website}</div>
                    )}
                  </td>
                  <td style={{ textAlign: 'right', verticalAlign: 'top', color: '#000', lineHeight: '1.8' }}>
                    {data.location && (
                      <div style={{ fontSize: '10px', color: '#ccc', marginBottom: '4px' }}>LOC: {data.location}</div>
                    )}
                    {data.phone && (
                      <div style={{ fontWeight: 700 }}>{data.phone}</div>
                    )}
                  </td>
                </tr>
              </table>
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DraftingDetail;
