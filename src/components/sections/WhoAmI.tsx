export function WhoAmI() {
  return (
    <div className="bg-white h-[740px] relative rounded-[2px] shrink-0 w-full max-w-[1081px]" data-name="main">
      <div className="h-[740px] not-italic overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-[calc(50%-60px)] text-[30px] text-nowrap top-[90px] tracking-[-0.225px] whitespace-pre text-neutral-800">whoami</p>
        <div className="absolute css-28sqho font-['Inter:Regular',_sans-serif] font-normal inset-[151px_182px_100px_182px] leading-[28px] text-[16px] text-neutral-800 overflow-auto">
          <p className="[text-indent:4px] mb-[10px]">
            I'm a Front-End Developer with a diverse background that bridges creativity and technology. My journey into tech began in an unexpected place — as an electrician — before evolving through design and publishing, where I developed a strong eye for structure, aesthetics, and detail.
          </p>
          <p className="[text-indent:4px] mb-[10px]">
            Today, I specialize in building clean, accessible, and efficient web interfaces that combine performance and thoughtful user experience. I enjoy bringing designs to life using modern JavaScript frameworks like React and Next.js, while maintaining a deep appreciation for solid fundamentals in HTML, CSS, and web accessibility.
          </p>
          <p className="[text-indent:4px] mb-[10px]">
            Beyond development, I'm passionate about non-profit and community projects, where I contribute both through volunteering and by developing tailored digital tools that help organizations work more efficiently. I also dedicate part of my time to home automation projects, exploring how technology can enhance comfort, efficiency, and sustainability — such as through my ongoing work transforming a building into a smart, fully automated space.
          </p>
          <p className="[text-indent:4px]">
            Driven by curiosity and a love for problem-solving, I'm constantly learning, experimenting, and seeking ways to use technology to make a meaningful impact.
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

export function WhoAmIMobile() {
  return (
    <div className="bg-white rounded-[2px] h-full overflow-auto" data-name="main">
      <div className="box-border content-stretch flex flex-col gap-[11px] items-center not-italic overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full text-neutral-800">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] relative shrink-0 text-[30px] text-center tracking-[-0.225px] w-full">whoami</p>
        <div className="css-7uevq9 font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">
          <p className="[text-indent:4px] mb-[10px]">
            I'm a Front-End Developer with a diverse background that bridges creativity and technology. My journey into tech began in an unexpected place — as an electrician — before evolving through design and publishing, where I developed a strong eye for structure, aesthetics, and detail.
          </p>
          <p className="[text-indent:4px] mb-[10px]">
            Today, I specialize in building clean, accessible, and efficient web interfaces that combine performance and thoughtful user experience. I enjoy bringing designs to life using modern JavaScript frameworks like React and Next.js, while maintaining a deep appreciation for solid fundamentals in HTML, CSS, and web accessibility.
          </p>
          <p className="[text-indent:4px] mb-[10px]">
            Beyond development, I'm passionate about non-profit and community projects, where I contribute both through volunteering and by developing tailored digital tools that help organizations work more efficiently.
          </p>
          <p className="[text-indent:4px]">
            Driven by curiosity and a love for problem-solving, I'm constantly learning, experimenting, and seeking ways to use technology to make a meaningful impact.
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
