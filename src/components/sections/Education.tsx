const education = [
  {
    title: 'Web Development Program',
    institution: 'Current Education',
    period: '2023 - Present',
    description: 'Focused on modern front-end development, JavaScript frameworks, and web standards. Learning through hands-on projects and real-world applications.',
  },
  {
    title: 'Design & Publishing',
    institution: 'Professional Training',
    period: 'Previous',
    description: 'Comprehensive training in visual design, typography, layout design, and content management systems. Developed strong attention to detail and user-centered design thinking.',
  },
  {
    title: 'Electrical Engineering',
    institution: 'Technical Training',
    period: 'Foundation',
    description: 'Technical education in electrical systems, circuitry, and problem-solving. Built systematic thinking skills and hands-on technical expertise.',
  },
  {
    title: 'Self-Taught Learning',
    institution: 'Continuous Education',
    period: 'Ongoing',
    description: 'Ongoing education through documentation, online courses, tutorials, and hands-on projects. Strong believer in learning by building and staying current with web technologies.',
  }
];

export function Education() {
  return (
    <div className="bg-white h-[740px] relative rounded-[2px] shrink-0 w-full max-w-[1081px]" data-name="main">
      <div className="h-[740px] not-italic overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-[calc(50%-70px)] text-[30px] text-neutral-800 text-nowrap top-[90px] tracking-[-0.225px] whitespace-pre">education</p>
        <div className="absolute left-[182px] right-[182px] top-[151px] bottom-[50px] overflow-auto">
          <div className="space-y-[32px]">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-[20px]">
                <h3 className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] text-[18px] text-neutral-800 mb-[4px]">
                  {edu.title}
                </h3>
                <p className="font-['Inter:Light',_sans-serif] font-light leading-[20px] text-[14px] text-gray-600 mb-[8px]">
                  {edu.institution}
                  <span className="font-['Inter:Light',_sans-serif] font-light leading-[10px] lowercase text-[12px] text-gray-500 ml-[12px]">
                    {edu.period}
                  </span>
                </p>
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[22px] text-[14px] text-neutral-700">
                  {edu.description}
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

export function EducationMobile() {
  return (
    <div className="bg-white rounded-[2px] h-full overflow-auto" data-name="main">
      <div className="box-border content-stretch flex flex-col gap-[11px] items-center not-italic overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full text-neutral-800">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] relative shrink-0 text-[30px] text-center tracking-[-0.225px] w-full">education</p>
        <div className="css-7uevq9 font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">
          <div className="space-y-[24px]">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-[12px]">
                <h3 className="text-[16px] leading-[22px] mb-[4px]">
                  {edu.title}
                </h3>
                <p className="font-['Inter:Light',_sans-serif] font-light text-[13px] leading-[18px] text-gray-600 mb-[6px]">
                  {edu.institution}
                </p>
                <p className="text-[14px] leading-[20px] text-neutral-700">
                  {edu.description}
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
