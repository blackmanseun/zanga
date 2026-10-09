export default function InvestorsFundManagersHeroGrid() {
    return (
        <div className="hidden md:block ml-auto w-full space-y-4">
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 relative rounded-xl overflow-hidden">
                    <img className="rounded-xl h-[200px] w-full object-cover" src="/images/159.jpg"/>
                    <div className="absolute inset-0 bg-slate-800/20"/>
                </div>
                <div className="col-span-2 relative rounded-xl overflow-hidden">
                    <img className="rounded-xl h-[200px] w-full object-cover object-center" src="/images/160.jpg"/>
                    <div className="absolute inset-0 bg-slate-800/20"/>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2 space-y-4">
                    <div className="relative rounded-xl overflow-hidden">
                        <img className="rounded-xl h-[150px] w-full object-cover object-center" src="/images/161.jpg"/>
                        <div className="absolute inset-0 bg-slate-800/20"/>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <img className="rounded-xl h-[150px] w-full object-cover" src="/images/204.jpg"/>
                        <div className="absolute inset-0 bg-slate-800/20"/>
                    </div>
                </div>
                <div className="col-span-3 relative rounded-xl overflow-hidden">
                    <img className="rounded-xl h-[320px] w-full object-cover" src="/images/158.jpg"/>
                    <div className="absolute inset-0 bg-slate-800/20"/>
                </div>
            </div>
        </div>
    )
}
