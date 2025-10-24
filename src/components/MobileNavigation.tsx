import { useState } from 'react';

type MobileNavigationProps = {
  activeSection: string;
  onNavigate: (section: string) => void;
};

function FilterItems({ filter }: { filter: string }) {
  return (
    <div className="content-stretch flex font-['Inter:Light',_sans-serif] font-light items-start leading-[10px] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre" data-name="filter-items">
      <p className="lowercase relative shrink-0 text-gray-700">.</p>
      <p className="relative shrink-0 text-gray-400">/</p>
      <p className="lowercase relative shrink-0 text-gray-700">{filter}</p>
      <p className="relative shrink-0 text-gray-400">/</p>
      <p className="lowercase relative shrink-0 text-gray-700">.</p>
    </div>
  );
}

export function MobileNavigation({ activeSection, onNavigate }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <div className={`absolute bg-white bottom-0 left-[36px] right-[36px] rounded-[2px] transition-all duration-300 ${isOpen ? 'h-auto' : 'h-[29px]'}`} data-name="navigation">
      <div className={`box-border content-stretch flex flex-col gap-[5px] items-center overflow-clip px-[40px] py-[10px] relative rounded-[inherit] w-full`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="content-stretch flex flex-col gap-[3px] items-center overflow-clip relative shrink-0 w-[56px] cursor-pointer" 
          data-name="menu text"
        >
          <div className="h-0 relative shrink-0 w-[56px]">
            <div className="absolute inset-[-1px_-1.79%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 2">
                <path d="M1 1H57" id="Line 1" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-none not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">menu</p>
        </button>
        
        {isOpen && (
          <div className="content-stretch flex flex-col gap-[27px] items-start overflow-clip relative shrink-0 w-full" data-name="nav items">
            <button onClick={() => handleNavigate('hello')} className="box-border content-stretch cursor-pointer flex gap-[4px] items-start overflow-visible p-0 relative shrink-0">
              <p className={`${activeSection === 'hello' ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' : 'text-gray-500'} font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre`}>hello</p>
            </button>
            <button onClick={() => handleNavigate('whoami')} className="box-border content-stretch cursor-pointer flex gap-[4px] items-start overflow-visible p-0 relative shrink-0">
              <p className={`${activeSection === 'whoami' ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' : 'text-gray-500'} font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre`}>whoami</p>
            </button>
            <button onClick={() => handleNavigate('notes')} className="box-border content-stretch cursor-pointer flex gap-[4px] items-start overflow-visible p-0 relative shrink-0">
              <p className={`${activeSection === 'notes' ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' : 'text-gray-500'} font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre`}>Notes</p>
            </button>
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
              <button onClick={() => handleNavigate('projects')} className="[white-space-collapse:collapse] block cursor-pointer font-['Inter:Regular',_sans-serif] font-normal leading-[0] lowercase not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap">
                <p className="leading-[20px] whitespace-pre">projects</p>
              </button>
              <FilterItems filter="current" />
            </div>
            <button onClick={() => handleNavigate('tools')} className="box-border content-stretch cursor-pointer flex gap-[4px] items-start overflow-visible p-0 relative shrink-0">
              <p className={`${activeSection === 'tools' ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' : 'text-gray-500'} font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre`}>Tools</p>
            </button>
            <div className="box-border content-stretch flex font-['Inter:Regular',_sans-serif] font-normal items-start not-italic pl-0 pr-px py-0 relative shrink-0 text-[14px] text-nowrap">
              <button onClick={() => handleNavigate('experiences')} className={`[white-space-collapse:collapse] block cursor-pointer leading-[0] lowercase mr-[-1px] relative shrink-0 ${activeSection === 'experiences' ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' : 'text-gray-500'}`}>
                <p className="leading-[20px] text-nowrap whitespace-pre">experiences</p>
              </button>
              <p className="leading-[20px] mr-[-1px] relative shrink-0 text-gray-300 whitespace-pre">/</p>
              <button onClick={() => handleNavigate('education')} className={`[white-space-collapse:collapse] block cursor-pointer leading-[0] lowercase mr-[-1px] relative shrink-0 ${activeSection === 'education' ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' : 'text-[#949cad]'}`}>
                <p className="leading-[20px] text-nowrap whitespace-pre">education</p>
              </button>
            </div>
            <button onClick={() => handleNavigate('associative')} className="content-stretch flex gap-[4px] items-start relative shrink-0">
              <p className={`${activeSection === 'associative' ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' : 'text-gray-500'} font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre`}>associative work</p>
            </button>
            <button onClick={() => handleNavigate('services')} className="content-stretch flex gap-[4px] items-start relative shrink-0">
              <p className={`${activeSection === 'services' ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' : 'text-gray-500'} font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre`}>services</p>
            </button>
          </div>
        )}
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)]" />
    </div>
  );
}
