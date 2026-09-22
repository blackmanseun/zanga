export default function SmesHeroGrid() {
    return (
        <div className="hidden md:block ml-auto w-full space-y-4">
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 relative rounded-xl overflow-hidden">
                    <img className="rounded-xl h-[200px] w-full object-cover" src="/images/4.jpg"/>
                    <div className="absolute inset-0 bg-slate-800/30"/>
                </div>
                <div className="col-span-2 relative rounded-xl overflow-hidden">
                    <img className="rounded-xl h-[200px] w-full object-cover" src="/images/43.jpg"/>
                    <div className="absolute inset-0 bg-slate-800/30"/>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2 space-y-4">
                    <div className="relative rounded-xl overflow-hidden">
                        <img className="rounded-xl h-[150px] w-full object-cover" src="/images/50.jpg"/>
                        <div className="absolute inset-0 bg-slate-800/30"/>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <img className="rounded-xl h-[150px] w-full object-cover" src="/images/52.jpg"/>
                        <div className="absolute inset-0 bg-slate-800/30"/>
                    </div>
                </div>
                <div className="col-span-3 relative rounded-xl overflow-hidden">
                    <img className="rounded-xl h-full w-full object-cover" src="/images/45.jpg"/>
                    <div className="absolute inset-0 bg-slate-800/30"/>
                </div>
            </div>
        </div>
    )
}
