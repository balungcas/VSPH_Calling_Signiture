
import React from 'react';
import { SignatureData, TemplateId } from '../types';
import DraftingDetail from './templates/DraftingDetail';
import ThePerspective from './templates/ThePerspective';

interface SignaturePreviewProps {
  data: SignatureData;
  templateId: TemplateId;
}

const SignaturePreview: React.FC<SignaturePreviewProps> = ({ data, templateId }) => {
  const renderTemplate = () => {
    switch (templateId) {
      case 'vsph-opt-1': return <DraftingDetail data={data} />;
      case 'vsph-opt-2': return <ThePerspective data={data} />;
      default: return <DraftingDetail data={data} />;
    }
  };

  return (
    <div className="group relative">
      <div className="absolute -top-6 left-0 text-[10px] font-mono text-black/20 uppercase tracking-widest">
        Preview Mode: Live Rendering
      </div>
      
      <div 
        id="signature-output"
        className="bg-white p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-black/5 transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] hover:border-black/20"
      >
        <div id="signature-output-content">
          {renderTemplate()}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex gap-1">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-1.5 h-1.5 bg-black/10 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignaturePreview;
