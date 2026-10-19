export default function PublicSectorInstitutionsHeroGrid() {
    return (
        <div className="hidden md:block ml-auto w-full space-y-4">
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 relative rounded-xl overflow-hidden">
                    <img className="rounded-xl h-[200px] w-full object-cover" src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/201"/>
                    <div className="absolute inset-0 bg-slate-800/20"/>
                </div>
                <div className="col-span-2 relative rounded-xl overflow-hidden">
                    <img className="rounded-xl h-[200px] w-full object-cover object-top" src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/145"/>
                    <div className="absolute inset-0 bg-slate-800/20"/>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2 space-y-4">
                    <div className="relative rounded-xl overflow-hidden">
                        <img className="rounded-xl h-[150px] w-full object-cover object-center" src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/146"/>
                        <div className="absolute inset-0 bg-slate-800/20"/>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <img className="rounded-xl h-[150px] w-full object-cover" src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/147"/>
                        <div className="absolute inset-0 bg-slate-800/20"/>
                    </div>
                </div>
                <div className="col-span-3 relative rounded-xl overflow-hidden">
                    <img className="rounded-xl h-[320px] w-full object-cover" src="https://res.cloudinary.com/xdufulll/image/upload/f_auto,q_auto,c_limit,w_1600,h_1600/zanga-site/144"/>
                    <div className="absolute inset-0 bg-slate-800/20"/>
                </div>
            </div>
        </div>
    )
}
