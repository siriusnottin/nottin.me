type NavItemProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
  filter?: string;
  combined?: { label: string; separator: string; color: string; onClick?: () => void }[];
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

function NavItem({ label, active, onClick, filter, combined }: NavItemProps) {
  if (combined) {
    return (
      <div className="box-border content-stretch flex font-['Inter:Regular',_sans-serif] font-normal items-start not-italic pl-0 pr-px py-0 relative shrink-0 text-[14px] text-nowrap" data-name="nav item">
        <button 
          onClick={onClick}
          className={`[white-space-collapse:collapse] block cursor-pointer leading-[0] lowercase mr-[-1px] relative shrink-0 transition-colors ${
            active && combined[0].label === label 
              ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <p className="leading-[20px] text-nowrap whitespace-pre">{combined[0].label}</p>
        </button>
        <p className="leading-[20px] mr-[-1px] relative shrink-0 text-gray-300 whitespace-pre">{combined[0].separator}</p>
        <button
          onClick={combined[1].onClick}
          className={`[white-space-collapse:collapse] block cursor-pointer leading-[0] lowercase mr-[-1px] relative shrink-0 transition-colors ${
            active && combined[1].label === label 
              ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' 
              : 'text-[#949cad] hover:text-gray-700'
          }`}
        >
          <p className="leading-[20px] text-nowrap whitespace-pre">{combined[1].label}</p>
        </button>
      </div>
    );
  }

  if (filter) {
    return (
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="nav item">
        <button 
          onClick={onClick}
          className="[white-space-collapse:collapse] block cursor-pointer font-['Inter:Regular',_sans-serif] font-normal leading-[0] lowercase not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap hover:text-gray-700 transition-colors"
        >
          <p className="leading-[20px] whitespace-pre">{label}</p>
        </button>
        <FilterItems filter={filter} />
      </div>
    );
  }

  return (
    <button 
      onClick={onClick}
      className="box-border content-stretch cursor-pointer flex gap-[4px] items-start overflow-visible p-0 relative shrink-0" 
      data-name="nav item"
    >
      <p className={`${active ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' : 'text-gray-500 hover:text-gray-700'} font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre transition-colors`}>
        {label}
      </p>
    </button>
  );
}

type NavigationProps = {
  activeSection: string;
  onNavigate: (section: string) => void;
};

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <div className="absolute bg-white left-[81px] rounded-[2px] top-1/2 translate-y-[-50%] w-[248px]" data-name="navigation">
      <div className="box-border content-stretch flex flex-col gap-[27px] items-start overflow-clip px-[40px] py-[50px] relative rounded-[inherit] w-[248px]">
        <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0" data-name="nav items">
          <NavItem label="hello" active={activeSection === 'hello'} onClick={() => onNavigate('hello')} />
          <NavItem label="whoami" active={activeSection === 'whoami'} onClick={() => onNavigate('whoami')} />
          <NavItem label="Notes" active={activeSection === 'notes'} onClick={() => onNavigate('notes')} />
          <NavItem label="projects" filter="current" active={activeSection === 'projects'} onClick={() => onNavigate('projects')} />
          <NavItem label="Tools" active={activeSection === 'tools'} onClick={() => onNavigate('tools')} />
          <NavItem 
            label={activeSection === 'experiences' ? 'experiences' : activeSection === 'education' ? 'education' : 'experiences'} 
            active={activeSection === 'experiences' || activeSection === 'education'} 
            onClick={() => onNavigate('experiences')}
            combined={[
              { label: 'experiences', separator: '/', color: 'text-gray-500' },
              { label: 'education', separator: '', color: 'text-[#949cad]', onClick: () => onNavigate('education') }
            ]}
          />
          <NavItem label="associative work" active={activeSection === 'associative'} onClick={() => onNavigate('associative')} />
          <NavItem label="services" active={activeSection === 'services'} onClick={() => onNavigate('services')} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)]" />
    </div>
  );
}
