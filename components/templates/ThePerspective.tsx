
import React from 'react';
import { SignatureData } from '../../types';

const ThePerspective: React.FC<{ data: SignatureData }> = ({ data }) => {
  const hasContact = data.email || data.website || data.phone;

  // Split name to create the stacked bold look from the original design
  const nameParts = data.name.toUpperCase().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  return (
    <div style={{ fontFamily: "'Helvetica', sans-serif", width: '100%', color: '#000' }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr>
          {/* Identity Section */}
          <td style={{ padding: '20px', borderRight: (hasContact || data.imageUrl) ? '1px solid #eee' : 'none', width: '45%' }}>
            {data.name && (
              <div style={{ fontSize: '28px', fontStretch: 'condensed', fontWeight: 900, letterSpacing: '-2px', lineHeight: '0.9', textTransform: 'uppercase' }}>
                {firstName}
                {lastName && <><br />{lastName}</>}
              </div>
            )}
            {data.role && (
              <div style={{ fontSize: '11px', color: '#999', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {data.role}
              </div>
            )}
            {data.company && (
              <div style={{ fontSize: '10px', color: '#bbb', marginTop: '2px', textTransform: 'uppercase' }}>
                {data.company}
              </div>
            )}
          </td>

          {/* Contact Details Section */}
          {hasContact && (
            <td style={{ paddingLeft: '20px', verticalAlign: 'bottom', paddingBottom: '20px' }}>
              <div style={{ fontSize: '11px', lineHeight: '1.8', color: '#000' }}>
                {data.email && (
                  <div>
                    <strong style={{ display: 'inline-block', width: '20px' }}>E:</strong> {data.email}
                  </div>
                )}
                {data.website && (
                  <div>
                    <strong style={{ display: 'inline-block', width: '20px' }}>W:</strong> {data.website}
                  </div>
                )}
                {data.phone && (
                  <div>
                    <strong style={{ display: 'inline-block', width: '20px' }}>P:</strong> {data.phone}
                  </div>
                )}
              </div>
            </td>
          )}

          {/* Image Section */}
          {data.imageUrl && (
            <td style={{ textAlign: 'right', verticalAlign: 'bottom', paddingBottom: '20px' }}>
              <img 
                src={data.imageUrl} 
                width="50" 
                height="50" 
                style={{ 
                  display: 'inline-block', 
                  filter: 'grayscale(100%) contrast(1.2)', 
                  WebkitFilter: 'grayscale(100%) contrast(1.2)',
                  objectFit: 'cover',
                  border: '1px solid #eee' 
                }}
                alt={data.name}
              />
            </td>
          )}
        </tr>
      </table>
    </div>
  );
};

export default ThePerspective;
