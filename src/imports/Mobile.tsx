function SiteTitleContainer() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0" data-name="site-title-container">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Développeur web en alternance</p>
    </div>
  );
}

function SiteTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-1/2 top-[47px] translate-x-[-50%]" data-name="Site Title">
      <p className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[48px] not-italic relative shrink-0 text-[48px] text-black text-nowrap tracking-[-0.576px] whitespace-pre">Sirius Nottin</p>
      <SiteTitleContainer />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-white inset-[123px_18px_-1px_10px] rounded-[2px]" data-name="main">
      <div className="box-border content-stretch flex flex-col gap-[11px] items-center not-italic overflow-clip px-[8px] py-[10px] relative rounded-[inherit] size-full text-neutral-800">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] relative shrink-0 text-[30px] text-center tracking-[-0.225px] w-full">whoami</p>
        <div className="css-7uevq9 font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">
          <p className="[text-indent:4px] mb-[10px]">Figma ipsum component variant main layer. Create ellipse hand font horizontal background. Overflow shadow italic font layout mask underline. Object stroke pen figma library content asset figjam union. Align italic fill move flows asset pencil outline invite line. Scale undo inspect figma main device union background share. Mask editor polygon edit library. Create pixel blur shadow clip. Editor pencil clip inspect community. Rectangle comment figjam distribute undo union rotate boolean pixel reesizing. Export community bold blur outline scale font image community.</p>
          <p className="[text-indent:4px]">Font pencil auto draft layout horizontal slice. Boolean group rotate pixel blur italic mask shadow layer. Hand group text undo invite prototype. Font connection flatten line variant pencil bold. Horizontal follower scrolling follower mask strikethrough figma background undo team. Polygon polygon bold overflow create rectangle image plugin. Draft flows text distribute frame figma. Blur blur object overflow blur outline pen device.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function MenuText() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center overflow-clip relative shrink-0 w-[56px]" data-name="menu text">
      <div className="h-0 relative shrink-0 w-[56px]">
        <div className="absolute inset-[-1px_-1.79%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 2">
            <path d="M1 1H57" id="Line 1" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-none not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">menu</p>
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
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',_sans-serif] font-normal leading-[20px] line-through lowercase not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">whoami</p>
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
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap whitespace-pre">Tools</p>
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
    <div className="content-stretch flex flex-col gap-[27px] items-start overflow-clip relative shrink-0 w-full" data-name="nav items">
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
    <div className="absolute bg-white bottom-0 h-[29px] left-[36px] right-[36px] rounded-[2px]" data-name="navigation">
      <div className="box-border content-stretch flex flex-col gap-[5px] items-center overflow-clip px-[40px] py-[10px] relative rounded-[inherit] size-full">
        <MenuText />
        <NavItems />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)]" />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile">
      <SiteTitle />
      <Main />
      <Navigation />
    </div>
  );
}