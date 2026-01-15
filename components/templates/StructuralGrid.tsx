
import React from 'react';
import { SignatureData } from '../../types';

const StructuralGrid: React.FC<{ data: SignatureData }> = ({ data }) => {
  const hasMainInfo = data.name || data.role || data.company;
  const hasContactInfo = data.email || data.phone || data.website;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div style={{ border: '1px solid #EEE', padding: '20px' }}>
        <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
          {hasMainInfo && (
            <tr>
              <td colSpan={2} style={{ paddingBottom: '25px', borderBottom: '1px solid #000' }}>
                 {data.name && (
                   <div style={{ fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-1px' }}>{data.name}</div>
                 )}
                 {(data.role || data.company) && (
                   <div style={{ fontSize: '11px', color: '#888', letterSpacing: '2px', textTransform: 'uppercase' }}>
                     {data.role}{data.role && data.company ? ' at ' : ''}{data.company}
                   </div>
                 )}
              </td>
            </tr>
          )}
          <tr>
            <td style={{ paddingTop: '25px', verticalAlign: 'top' }}>
              {hasContactInfo && (
                <table cellPadding="0" cellSpacing="0" style={{ fontSize: '12px', lineHeight: '2' }}>
                  {data.email && (
                    <tr>
                      <td style={{ color: '#888', width: '30px' }}>E:</td>
                      <td style={{ fontWeight: 500 }}>{data.email}</td>
                    </tr>
                  )}
                  {data.phone && (
                    <tr>
                      <td style={{ color: '#888' }}>P:</td>
                      <td style={{ fontWeight: 500 }}>{data.phone}</td>
                    </tr>
                  )}
                  {data.website && (
                    <tr>
                      <td style={{ color: '#888' }}>W:</td>
                      <td style={{ fontWeight: 500 }}>{data.website}</td>
                    </tr>
                  )}
                </table>
              )}
            </td>
            <td style={{ paddingTop: '25px', textAlign: 'right', verticalAlign: 'top' }}>
               {data.imageUrl && (
                 <img 
                   src={data.imageUrl} 
                   width="80" 
                   height="80" 
                   style={{ objectFit: 'cover', display: 'inline-block' }}
                   alt={data.name}
                 />
               )}
               <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#DDD', marginTop: '10px', textTransform: 'uppercase' }}>
                 Verified Structural Detail
               </div>
            </td>
          </tr>
        </table>
      </div>
      <div style={{ display: 'flex', border: '1px solid #EEE', borderTop: 'none' }}>
        {data.location && (
          <div style={{ flex: 1, padding: '10px 20px', fontSize: '9px', color: '#BBB', borderRight: '1px solid #EEE' }}>COORD: {data.location}</div>
        )}
        <div style={{ flex: 1, padding: '10px 20px', fontSize: '9px', color: '#BBB', textAlign: 'right' }}>DATE: {new Date().getFullYear()}.REV.01</div>
      </div>
    </div>
  );
};

export default StructuralGrid;
