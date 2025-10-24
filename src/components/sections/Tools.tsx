const tools = [
  { name: 'React', experience: '2', category: 'Framework' },
  { name: 'Next.js', experience: '1.5', category: 'Framework' },
  { name: 'TypeScript', experience: '2', category: 'Language' },
  { name: 'JavaScript', experience: '3', category: 'Language' },
  { name: 'HTML/CSS', experience: '4', category: 'Fundamentals' },
  { name: 'Tailwind CSS', experience: '2', category: 'Styling' },
  { name: 'Git', experience: '3', category: 'Version Control' },
  { name: 'Figma', experience: '3', category: 'Design' },
  { name: 'Accessibility', experience: '2', category: 'Standards' },
];

export function Tools() {
  return (
    <div className="bg-white h-[740px] relative rounded-[2px] shrink-0 w-full max-w-[1081px]" data-name="main">
      <div className="h-[740px] not-italic overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-[calc(50%-35px)] text-[30px] text-neutral-800 text-nowrap top-[90px] tracking-[-0.225px] whitespace-pre">tools</p>
        <p className="[text-indent:4px] absolute css-28sqho font-['Inter:Regular',_sans-serif] font-normal inset-[151px_182px_auto_182px] leading-[28px] text-[16px] text-neutral-800">
          Here are the main technologies and tools I work with to build modern, performant web applications. I'm always learning and expanding my toolkit.
        </p>
        <div className="absolute left-[182px] right-[182px] top-[235px] bottom-[50px] overflow-auto">
          <ul className="space-y-[16px]">
            {tools.map((tool, index) => (
              <li key={index} className="list-disc ms-[24px]">
                <span className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] text-[16px] text-neutral-800">
                  {tool.name}
                  <span className="font-['Inter:Light',_sans-serif] font-light leading-[10px] lowercase text-[12px] text-black ml-[12px]">
                    used for <span className="css-9kxq0x">{tool.experience}</span> years
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

export function ToolsMobile() {
  return (
    <div className="bg-white rounded-[2px] h-full overflow-auto" data-name="main">
      <div className="box-border content-stretch flex flex-col gap-[11px] items-center not-italic overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full text-neutral-800">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] relative shrink-0 text-[30px] text-center tracking-[-0.225px] w-full">tools</p>
        <div className="css-7uevq9 font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">
          <p className="[text-indent:4px] mb-[10px]">
            Here are the main technologies and tools I work with to build modern, performant web applications.
          </p>
          <ul className="space-y-[12px]">
            {tools.map((tool, index) => (
              <li key={index} className="list-disc ms-[24px]">
                <span className="leading-[24px]">
                  {tool.name}
                  <span className="font-['Inter:Light',_sans-serif] font-light leading-[10px] lowercase text-[12px] text-black ml-[8px]">
                    {tool.experience}y
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
