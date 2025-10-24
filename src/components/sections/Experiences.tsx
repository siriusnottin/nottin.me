const experiences = [
  {
    title: 'Front-End Developer (Alternance)',
    period: 'Current',
    description: 'Building modern web applications using React, Next.js, and TypeScript. Focus on creating accessible, performant interfaces with clean code and thoughtful user experience.',
    type: 'work'
  },
  {
    title: 'Design & Publishing',
    period: 'Previous',
    description: 'Developed strong visual design skills, understanding of typography, layout, and content structure. Learned the importance of attention to detail and user-centered thinking.',
    type: 'work'
  },
  {
    title: 'Electrician',
    period: 'Foundation',
    description: 'Built systematic problem-solving skills, understanding of complex systems, and hands-on technical expertise. This background informs my approach to debugging and building robust solutions.',
    type: 'work'
  }
];

export function Experiences() {
  return (
    <div className="bg-white h-[740px] relative rounded-[2px] shrink-0 w-full max-w-[1081px]" data-name="main">
      <div className="h-[740px] not-italic overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-[calc(50%-85px)] text-[30px] text-neutral-800 text-nowrap top-[90px] tracking-[-0.225px] whitespace-pre">experiences</p>
        <div className="absolute left-[182px] right-[182px] top-[151px] bottom-[50px] overflow-auto">
          <div className="space-y-[40px]">
            <div>
              <div className="space-y-[24px]">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-gray-300 pl-[20px]">
                    <h4 className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] text-[16px] text-neutral-800 mb-[4px]">
                      {exp.title}
                      <span className="font-['Inter:Light',_sans-serif] font-light leading-[10px] lowercase text-[12px] text-gray-600 ml-[12px]">
                        {exp.period}
                      </span>
                    </h4>
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[22px] text-[14px] text-neutral-700">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

export function ExperiencesMobile() {
  return (
    <div className="bg-white rounded-[2px] h-full overflow-auto" data-name="main">
      <div className="box-border content-stretch flex flex-col gap-[11px] items-center not-italic overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full text-neutral-800">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] relative shrink-0 text-[30px] text-center tracking-[-0.225px] w-full">experiences</p>
        <div className="css-7uevq9 font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">
          <div className="space-y-[20px]">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-[12px]">
                <h4 className="text-[15px] leading-[22px] mb-[4px]">
                  {exp.title}
                </h4>
                <p className="text-[14px] leading-[20px] text-neutral-700">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
