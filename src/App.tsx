import { useState, useEffect } from 'react';
import { SiteTitle } from './components/SiteTitle';
import { Navigation } from './components/Navigation';
import { MobileNavigation } from './components/MobileNavigation';
import { Hello, HelloMobile } from './components/sections/Hello';
import { WhoAmI, WhoAmIMobile } from './components/sections/WhoAmI';
import { Notes, NotesMobile } from './components/sections/Notes';
import { Projects, ProjectsMobile } from './components/sections/Projects';
import { Tools, ToolsMobile } from './components/sections/Tools';
import { Experiences, ExperiencesMobile } from './components/sections/Experiences';
import { Education, EducationMobile } from './components/sections/Education';
import { AssociativeWork, AssociativeWorkMobile } from './components/sections/AssociativeWork';
import { Services, ServicesMobile } from './components/sections/Services';

type Section = 'hello' | 'whoami' | 'notes' | 'projects' | 'tools' | 'experiences' | 'education' | 'associative' | 'services';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('hello');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderSection = () => {
    if (isMobile) {
      switch (activeSection) {
        case 'hello':
          return <HelloMobile />;
        case 'whoami':
          return <WhoAmIMobile />;
        case 'notes':
          return <NotesMobile />;
        case 'projects':
          return <ProjectsMobile />;
        case 'tools':
          return <ToolsMobile />;
        case 'experiences':
          return <ExperiencesMobile />;
        case 'education':
          return <EducationMobile />;
        case 'associative':
          return <AssociativeWorkMobile />;
        case 'services':
          return <ServicesMobile />;
        default:
          return <HelloMobile />;
      }
    }

    switch (activeSection) {
      case 'hello':
        return <Hello />;
      case 'whoami':
        return <WhoAmI />;
      case 'notes':
        return <Notes />;
      case 'projects':
        return <Projects />;
      case 'tools':
        return <Tools />;
      case 'experiences':
        return <Experiences />;
      case 'education':
        return <Education />;
      case 'associative':
        return <AssociativeWork />;
      case 'services':
        return <Services />;
      default:
        return <Hello />;
    }
  };

  if (isMobile) {
    return (
      <div className="bg-white relative size-full min-h-screen" data-name="Mobile">
        <SiteTitle className="absolute content-stretch flex flex-col items-center left-1/2 top-[47px] translate-x-[-50%] z-10" />
        <div className="absolute inset-[123px_18px_60px_10px]">
          {renderSection()}
        </div>
        <MobileNavigation activeSection={activeSection} onNavigate={(section) => setActiveSection(section as Section)} />
      </div>
    );
  }

  return (
    <div className="bg-white relative size-full min-h-screen" data-name="portfolio">
      <div className="flex flex-col items-end justify-center size-full min-h-screen">
        <div className="box-border content-stretch flex flex-col items-end justify-center pl-[239px] pr-[120px] py-[80px] relative size-full">
          {renderSection()}
          <SiteTitle className="absolute content-stretch flex flex-col items-start left-[41px] top-[105px]" />
          <Navigation activeSection={activeSection} onNavigate={(section) => setActiveSection(section as Section)} />
        </div>
      </div>
    </div>
  );
}
