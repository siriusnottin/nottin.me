export function SiteTitle({ className }: { className?: string }) {
  return (
		<div className={className} data-name="Site Title">
			<p className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold leading-[48px] not-italic relative shrink-0 text-[48px] text-black text-nowrap tracking-[-0.576px] whitespace-pre">
				Sirius Nottin
			</p>
			<div
				className="bg-white content-stretch flex items-start overflow-clip relative shrink-0"
				data-name="site-title-container"
			>
				<p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">
					Full Stack Developer & Consultant
				</p>
			</div>
		</div>
	);
}
