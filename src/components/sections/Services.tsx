const services = [
  {
    title: 'Front-End Development',
    description: 'Building modern, responsive web applications using React, Next.js, and TypeScript. Focus on performance, accessibility, and clean code.',
  },
  {
    title: 'UI/UX Implementation',
    description: 'Translating designs into pixel-perfect, functional interfaces. Strong attention to detail and design systems.',
  },
  {
    title: 'Web Accessibility',
    description: 'Ensuring your applications are usable by everyone. WCAG compliance and inclusive design practices.',
  },
  {
    title: 'Technical Consulting',
    description: 'Advice on technology choices, architecture decisions, and best practices for web projects.',
  },
  {
    title: 'Non-Profit Support',
    description: 'Special rates and pro-bono work for community organizations and non-profit initiatives.',
  }
];

export function Services() {
  return (
    <div className="bg-white h-[740px] relative rounded-[2px] shrink-0 w-full max-w-[1081px]" data-name="main">
      <div className="h-[740px] not-italic overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-[calc(50%-60px)] text-[30px] text-neutral-800 text-nowrap top-[90px] tracking-[-0.225px] whitespace-pre">services</p>
        <div className="absolute left-[182px] right-[182px] top-[151px] bottom-[50px] overflow-auto">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] text-[16px] text-neutral-800 mb-[24px]">
            I offer a range of front-end development services, from building complete applications to consulting on specific technical challenges.
          </p>
          <div className="space-y-[20px]">
            {services.map((service, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-[20px]">
                <h3 className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] text-[16px] text-neutral-800 mb-[6px]">
                  {service.title}
                </h3>
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[22px] text-[14px] text-neutral-700">
                  {service.description}
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

export function ServicesMobile() {
  return (
    <div className="bg-white rounded-[2px] h-full overflow-auto" data-name="main">
      <div className="box-border content-stretch flex flex-col gap-[11px] items-center not-italic overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full text-neutral-800">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] relative shrink-0 text-[30px] text-center tracking-[-0.225px] w-full">services</p>
        <div className="css-7uevq9 font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">
          <p className="[text-indent:4px] mb-[16px]">
            I offer a range of front-end development services, from building complete applications to consulting on specific technical challenges.
          </p>
          <div className="space-y-[16px]">
            {services.map((service, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-[12px]">
                <h3 className="text-[15px] leading-[22px] mb-[4px]">
                  {service.title}
                </h3>
                <p className="text-[14px] leading-[20px] text-neutral-700">
                  {service.description}
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
