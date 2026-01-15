
import React, { useState, useCallback } from 'react';
import { SignatureData, TemplateId } from './types';
import Sidebar from './components/Sidebar';
import SignaturePreview from './components/SignaturePreview';
import { Toast } from './components/Toast';

const INITIAL_DATA: SignatureData = {
  name: "ADRIANNA ROSSI",
  role: "PRINCIPAL ARCHITECT",
  company: "ROSSI & PARTNERS",
  email: "a.rossi@rossipartners.com",
  website: "www.rossipartners.com",
  phone: "+1 212 555 0198",
  imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop",
  location: "40.7128° N, 74.0060° W",
  specId: "V21.ARCH.04"
};

const App: React.FC = () => {
  const [data, setData] = useState<SignatureData>(INITIAL_DATA);
  const [activeTemplate, setActiveTemplate] = useState<TemplateId>('vsph-opt-1');
  const [showToast, setShowToast] = useState(false);

  const handleCopy = useCallback(() => {
    const signatureElement = document.getElementById('signature-output');
    if (!signatureElement) return;

    const range = document.createRange();
    range.selectNode(signatureElement);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);

    try {
      document.execCommand('copy');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    window.getSelection()?.removeAllRanges();
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-['Inter']">
      <Sidebar 
        data={data} 
        onChange={setData} 
        activeTemplate={activeTemplate} 
        onTemplateSelect={setActiveTemplate}
        onCopy={handleCopy}
      />
      
      <main className="flex-1 bg-[#FAFAFA] p-6 md:p-12 overflow-y-auto flex flex-col items-center justify-center">
        <header className="w-full max-w-4xl mb-12 border-b border-black/5 pb-8">
            <h1 className="text-sm font-light tracking-[10px] uppercase text-black/40">Architectural Signature System</h1>
            <div className="flex justify-between items-end mt-2">
                <p className="text-2xl font-extralight tracking-tight uppercase">VSPH <span className="text-black/20">/</span> The Studio Edition</p>
                <div className="hidden md:block text-[10px] font-mono text-black/30 tracking-widest">STATIONARY_SPEC_{data.specId}</div>
            </div>
        </header>

        <div className="w-full max-w-2xl">
          <SignaturePreview data={data} templateId={activeTemplate} />
        </div>

        <footer className="w-full max-w-4xl mt-24 border-t border-black/5 pt-8 text-center">
            <p className="text-[10px] tracking-[6px] uppercase text-black/30">End of Structural Precision / Finalized Document</p>
        </footer>
      </main>

      <Toast show={showToast} message="SIGNATURE COPIED TO CLIPBOARD" />
    </div>
  );
};

export default App;
