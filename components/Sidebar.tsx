
import React, { useRef } from 'react';
import { SignatureData, TemplateId } from '../types';

interface SidebarProps {
  data: SignatureData;
  onChange: (data: SignatureData) => void;
  activeTemplate: TemplateId;
  onTemplateSelect: (id: TemplateId) => void;
  onCopy: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ data, onChange, activeTemplate, onTemplateSelect, onCopy }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const templates: { id: TemplateId; name: string }[] = [
    { id: 'vsph-opt-1', name: 'VSPH OPTION 1' },
    { id: 'vsph-opt-2', name: 'VSPH OPTION 2' }
  ];

  const inputFields = [
    { label: 'Full Name', name: 'name' },
    { label: 'Role / Title', name: 'role' },
    { label: 'Company Name', name: 'company' },
    { label: 'Email Address', name: 'email' },
    { label: 'Website URL', name: 'website' },
    { label: 'Phone Number', name: 'phone' },
    { label: 'Coordinates', name: 'location' }
  ];

  return (
    <aside className="w-full md:w-96 bg-white border-r border-black/10 flex flex-col h-screen overflow-y-auto">
      <div className="p-8 border-b border-black/10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 bg-black"></div>
          <span className="text-xs font-bold tracking-[4px] uppercase">ArchiSig v2.0</span>
        </div>
        <p className="text-[10px] text-black/40 uppercase tracking-widest">Studio Precision Tool</p>
      </div>

      <div className="p-8 space-y-8 flex-1">
        <section>
          <h3 className="text-[10px] font-bold uppercase tracking-[3px] text-black/30 mb-6">Select Template</h3>
          <div className="grid grid-cols-1 gap-2">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => onTemplateSelect(t.id)}
                className={`text-left px-4 py-3 text-[11px] uppercase tracking-widest transition-all ${
                  activeTemplate === t.id 
                    ? 'bg-black text-white' 
                    : 'bg-transparent text-black border border-black/5 hover:border-black/20'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[3px] text-black/30 mb-6">Identity Specs</h3>
          
          <div className="mb-6">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-black/50 mb-2 text-xs">Profile Image</label>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
              accept="image/*"
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-[#F5F5F5] border border-dashed border-black/10 text-[11px] uppercase tracking-widest p-4 hover:border-black/30 transition-colors"
            >
              {data.imageUrl ? 'Change Image' : 'Upload Image'}
            </button>
            {data.imageUrl && (
              <button 
                onClick={() => onChange({ ...data, imageUrl: '' })}
                className="mt-2 text-[9px] text-red-400 uppercase tracking-widest font-bold"
              >
                Remove Image
              </button>
            )}
          </div>

          {inputFields.map((field) => (
            <div key={field.name}>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-black/50 mb-2">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={(data as any)[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                className="w-full bg-[#F5F5F5] border-none text-[12px] p-3 focus:ring-1 focus:ring-black outline-none font-medium placeholder:text-black/20"
              />
            </div>
          ))}
        </section>
      </div>

      <div className="p-8 bg-white border-t border-black/10 sticky bottom-0">
        <button
          onClick={onCopy}
          className="w-full bg-black text-white py-4 text-[11px] font-bold uppercase tracking-[4px] hover:bg-neutral-800 transition-colors shadow-xl"
        >
          Generate & Copy
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
