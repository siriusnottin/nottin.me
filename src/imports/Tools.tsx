function Main() {
  return (
    <div className="bg-white h-[740px] relative rounded-[2px] shrink-0 w-[1081px]" data-name="main">
      <div className="h-[740px] not-italic overflow-clip relative rounded-[inherit] w-[1081px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-[calc(50%-35.5px)] text-[30px] text-neutral-800 text-nowrap top-[90px] tracking-[-0.225px] whitespace-pre">tools</p>
        <p className="[text-indent:4px] absolute css-28sqho font-['Inter:Regular',_sans-serif] font-normal inset-[151px_182px_505px_182px] leading-[28px] text-[16px] text-neutral-800">Figma ipsum component variant main layer. Create ellipse hand font horizontal background. Overflow shadow italic font layout mask underline. Object stroke pen figma library content asset figjam union. Align italic fill move.</p>
        <button className="[white-space-collapse:collapse] absolute block cursor-pointer font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[182px] text-[16px] text-neutral-800 text-nowrap top-[260px]">
          <ul>
            <li className="list-disc ms-[24px]">
              <span className="leading-[24px]">Figma</span>
            </li>
          </ul>
        </button>
        <p className="absolute font-['Inter:Light',_sans-serif] font-light leading-[10px] left-[258px] lowercase text-[12px] text-black text-nowrap top-[271px] whitespace-pre">used for</p>
        <p className="absolute css-9kxq0x font-['Inter:Light',_sans-serif] font-light leading-[10px] left-[306px] lowercase text-[12px] text-black text-nowrap top-[271px] whitespace-pre">2</p>
        <p className="absolute font-['Inter:Light',_sans-serif] font-light leading-[10px] left-[315px] lowercase text-[12px] text-black text-nowrap top-[271px] whitespace-pre">years</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function SiteTitleContainer() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0" data-name="site-title-container">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Développeur web en alternance</p>
    </div>
  );
}

function SiteTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[41px] top-[105px]" data-name="Site Title">
      <p className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[48px] not-italic relative shrink-0 text-[48px] text-black text-nowrap tracking-[-0.576px] whitespace-pre">Sirius Nottin</p>
      <SiteTitleContainer />
    </div>
  );
}

function NavItem() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[4px] items-start overflow-visible p-0 relative shrink-0" data-name="nav item">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap whitespace-pre">hello</p>
    </button>
  );
}

function NavItem1() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[4px] items-start overflow-visible p-0 relative shrink-0" data-name="nav item">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap whitespace-pre">whoami</p>
    </button>
  );
}

function NavItem2() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[4px] items-start overflow-visible p-0 relative shrink-0" data-name="nav item">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap whitespace-pre">Notes</p>
    </button>
  );
}

function FilterItems() {
  return (
    <div className="content-stretch flex font-['Inter:Light',_sans-serif] font-light items-start leading-[10px] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre" data-name="filter-items">
      <p className="lowercase relative shrink-0 text-gray-700">.</p>
      <p className="relative shrink-0 text-gray-400">/</p>
      <p className="lowercase relative shrink-0 text-gray-700">current</p>
      <p className="relative shrink-0 text-gray-400">/</p>
      <p className="lowercase relative shrink-0 text-gray-700">.</p>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="nav item">
      <button className="[white-space-collapse:collapse] block cursor-pointer font-['Inter:Regular',_sans-serif] font-normal leading-[0] lowercase not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap">
        <p className="leading-[20px] whitespace-pre">projects</p>
      </button>
      <FilterItems />
    </div>
  );
}

function NavItem4() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[4px] items-start overflow-visible p-0 relative shrink-0" data-name="nav item">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',_sans-serif] font-normal leading-[20px] line-through lowercase not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Tools</p>
    </button>
  );
}

function NavItem5() {
  return (
    <div className="box-border content-stretch flex font-['Inter:Regular',_sans-serif] font-normal items-start not-italic pl-0 pr-px py-0 relative shrink-0 text-[14px] text-nowrap" data-name="nav item">
      <button className="[white-space-collapse:collapse] block cursor-pointer leading-[0] lowercase mr-[-1px] relative shrink-0 text-gray-500">
        <p className="leading-[20px] text-nowrap whitespace-pre">experiences</p>
      </button>
      <p className="leading-[20px] mr-[-1px] relative shrink-0 text-gray-300 whitespace-pre">/</p>
      <p className="leading-[20px] lowercase mr-[-1px] relative shrink-0 text-[#949cad] whitespace-pre">education</p>
    </div>
  );
}

function NavItem6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="nav item">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap whitespace-pre">associative work</p>
    </div>
  );
}

function NavItem7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="nav item">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap whitespace-pre">services</p>
    </div>
  );
}

function NavItems() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0" data-name="nav items">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
      <NavItem5 />
      <NavItem6 />
      <NavItem7 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white left-[81px] rounded-[2px] top-1/2 translate-y-[-50%] w-[248px]" data-name="navigation">
      <div className="box-border content-stretch flex flex-col gap-[27px] items-start overflow-clip px-[40px] py-[50px] relative rounded-[inherit] w-[248px]">
        <NavItems />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)]" />
    </div>
  );
}

export default function Tools() {
  return (
    <div className="bg-white relative size-full" data-name="tools">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-center pl-[239px] pr-[120px] py-[80px] relative size-full">
          <Main />
          <SiteTitle />
          <Navigation />
        </div>
      </div>
    </div>
  );
}