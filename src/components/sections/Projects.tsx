import { useState } from 'react';

type ProjectCategory = 'current' | 'past' | 'future';

const projects = [
  {
    name: 'Smart Building Automation',
    description: 'Ongoing project transforming a building into a fully automated smart space. Focused on energy efficiency, comfort optimization, and sustainable living through integrated IoT solutions.',
    tech: ['Home Assistant', 'IoT', 'Automation'],
    category: 'current' as ProjectCategory
  },
  {
    name: 'Non-Profit Digital Tools',
    description: 'Custom web applications designed to help community organizations streamline their operations, manage volunteers, and increase their impact.',
    tech: ['React', 'Next.js', 'TypeScript'],
    category: 'current' as ProjectCategory
  },
  {
    name: 'Portfolio & Experimental Projects',
    description: 'Collection of personal projects exploring new technologies, design patterns, and web development best practices.',
    tech: ['React', 'Tailwind', 'Various APIs'],
    category: 'current' as ProjectCategory
  },
  {
    name: 'Publishing Platform',
    description: 'Developed a custom content management system for a design and publishing company. Streamlined workflow and improved collaboration between teams.',
    tech: ['JavaScript', 'CSS', 'CMS'],
    category: 'past' as ProjectCategory
  },
  {
    name: 'Electrical System Documentation',
    description: 'Created comprehensive digital documentation system for electrical installations, improving maintenance efficiency and safety protocols.',
    tech: ['Technical Documentation', 'Process Optimization'],
    category: 'past' as ProjectCategory
  },
  {
    name: 'AI-Powered Development Tools',
    description: 'Exploring integration of AI assistants in development workflow to improve productivity and code quality. Focus on accessibility and performance testing automation.',
    tech: ['AI/ML', 'TypeScript', 'Testing'],
    category: 'future' as ProjectCategory
  },
  {
    name: 'Community Platform Redesign',
    description: 'Planning a complete overhaul of a community organization\'s web presence with modern architecture, improved accessibility, and better user experience.',
    tech: ['Next.js', 'React', 'Accessibility'],
    category: 'future' as ProjectCategory
  }
];

function FilterButton({ 
  label, 
  active, 
  onClick 
}: { 
  label: ProjectCategory; 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase text-[14px] text-nowrap whitespace-pre transition-colors ${
        active 
          ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' 
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      {label}
    </button>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('current');
  
  const filteredProjects = projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-white h-[740px] relative rounded-[2px] shrink-0 w-full max-w-[1081px]" data-name="main">
      <div className="h-[740px] not-italic overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-[calc(50%-55px)] text-[30px] text-neutral-800 text-nowrap top-[90px] tracking-[-0.225px] whitespace-pre">projects</p>
        
        <div className="absolute left-[182px] top-[155px] flex gap-[20px] items-center">
          <div className="content-stretch flex font-['Inter:Light',_sans-serif] font-light items-start leading-[10px] not-italic text-[12px] text-nowrap whitespace-pre" data-name="filter-items">
            <p className="lowercase relative shrink-0 text-gray-700">.</p>
            <p className="relative shrink-0 text-gray-400">/</p>
            <p className="lowercase relative shrink-0 text-gray-700">filter</p>
            <p className="relative shrink-0 text-gray-400">/</p>
            <p className="lowercase relative shrink-0 text-gray-700">.</p>
          </div>
          <div className="flex gap-[12px]">
            <FilterButton label="current" active={activeFilter === 'current'} onClick={() => setActiveFilter('current')} />
            <span className="text-gray-300">/</span>
            <FilterButton label="past" active={activeFilter === 'past'} onClick={() => setActiveFilter('past')} />
            <span className="text-gray-300">/</span>
            <FilterButton label="future" active={activeFilter === 'future'} onClick={() => setActiveFilter('future')} />
          </div>
        </div>

        <div className="absolute left-[182px] right-[182px] top-[200px] bottom-[50px] overflow-auto">
          <div className="space-y-[32px]">
            {filteredProjects.map((project, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-[20px]">
                <h3 className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] text-[18px] text-neutral-800 mb-[8px]">
                  {project.name}
                </h3>
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] text-[16px] text-neutral-700 mb-[12px]">
                  {project.description}
                </p>
                <div className="flex gap-[8px] flex-wrap">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="font-['Inter:Light',_sans-serif] font-light leading-[10px] lowercase text-[12px] text-gray-600 bg-gray-100 px-[8px] py-[4px] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

export function ProjectsMobile() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('current');
  
  const filteredProjects = projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-white rounded-[2px] h-full overflow-auto" data-name="main">
      <div className="box-border content-stretch flex flex-col gap-[11px] items-center not-italic overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full text-neutral-800">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] relative shrink-0 text-[30px] text-center tracking-[-0.225px] w-full">projects</p>
        
        <div className="flex gap-[8px] items-center mb-[8px]">
          <div className="content-stretch flex font-['Inter:Light',_sans-serif] font-light items-start leading-[10px] not-italic text-[12px] text-nowrap whitespace-pre" data-name="filter-items">
            <p className="lowercase relative shrink-0 text-gray-700">.</p>
            <p className="relative shrink-0 text-gray-400">/</p>
            <p className="lowercase relative shrink-0 text-gray-700">filter</p>
            <p className="relative shrink-0 text-gray-400">/</p>
            <p className="lowercase relative shrink-0 text-gray-700">.</p>
          </div>
          <div className="flex gap-[8px]">
            <button
              onClick={() => setActiveFilter('current')}
              className={`font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase text-[12px] transition-colors ${
                activeFilter === 'current' 
                  ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' 
                  : 'text-gray-500'
              }`}
            >
              current
            </button>
            <span className="text-gray-300 text-[12px]">/</span>
            <button
              onClick={() => setActiveFilter('past')}
              className={`font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase text-[12px] transition-colors ${
                activeFilter === 'past' 
                  ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' 
                  : 'text-gray-500'
              }`}
            >
              past
            </button>
            <span className="text-gray-300 text-[12px]">/</span>
            <button
              onClick={() => setActiveFilter('future')}
              className={`font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase text-[12px] transition-colors ${
                activeFilter === 'future' 
                  ? '[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid line-through text-black' 
                  : 'text-gray-500'
              }`}
            >
              future
            </button>
          </div>
        </div>

        <div className="css-7uevq9 font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">
          <div className="space-y-[24px]">
            {filteredProjects.map((project, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-[12px]">
                <h3 className="leading-[24px] mb-[4px]">
                  {project.name}
                </h3>
                <p className="text-[14px] leading-[20px] text-neutral-700 mb-[8px]">
                  {project.description}
                </p>
                <div className="flex gap-[6px] flex-wrap">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="font-['Inter:Light',_sans-serif] font-light text-[11px] text-gray-600 bg-gray-100 px-[6px] py-[2px] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
