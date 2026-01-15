
import React from 'react';
import { SignatureData } from '../../types';

const MaterialSpec: React.FC<{ data: SignatureData }> = ({ data }) => {
  const hasBottomTable = data.role || data.website || data.phone || data.email;

  return (
    <div style={{ border: '2px solid #000', padding: '0' }}>
      <table cellPadding="0" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr>
          {data.imageUrl && (
            <td style={{ padding: '30px', borderRight: '1px solid #000', backgroundColor: '#F9F9F9', width: '100px', textAlign: 'center' }}>
              <img 
                src={data.imageUrl} 
                width="80" 
                height="80" 
                style={{ filter: 'grayscale(100%) contrast(1.2)', borderRadius: '50%', border: '2px solid #000' }}
                alt={data.name}
              />
            </td>
          )}
          <td style={{ padding: '30px', backgroundColor: '#FFF', verticalAlign: 'top' }}>
            <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#CCC', letterSpacing: '3px', marginBottom: '8px' }}>
              ARCH_SPEC_NO. {data.specId}
            </div>
            {data.name && (
              <div style={{ fontSize: '22px', fontWeight: 100, letterSpacing: '8px', textTransform: 'uppercase', fontFamily: "'Playfair Display', serif", marginBottom: '15px' }}>
                {data.name}
              </div>
            )}
            
            {hasBottomTable && (
              <table cellPadding="0" cellSpacing="0" style={{ width: '100%', fontSize: '11px', fontFamily: "monospace", borderTop: '1px solid #000', paddingTop: '15px' }}>
                <tr>
                  <td style={{ paddingBottom: '5px' }}>
                    {data.role && (
                      <><strong style={{ opacity: 0.3 }}>IDENT:</strong> {data.role}</>
                    )}
                  </td>
                  <td style={{ textAlign: 'right', paddingBottom: '5px' }}>
                    {data.website && (
                      <><strong style={{ opacity: 0.3 }}>LINK:</strong> {data.website}</>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    {data.phone && (
                      <><strong style={{ opacity: 0.3 }}>CALLS:</strong> {data.phone}</>
                    )}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    {data.email && (
                      <><strong style={{ opacity: 0.3 }}>MAIL:</strong> {data.email}</>
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

export default MaterialSpec;
