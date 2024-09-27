
export default function SkeletonArticle() {
  return (
    <div>
        <div className="border shadow rounded-md p-4 py-10 max-w-lg w-[300px] lg:w-[500px] mx-auto">
            <div className="animate-pulse flex space-x-4">

                <div className="flex-1 space-y-6">
                    <div className="w-full px-32">
                        <div className="grid grid-cols-4">
                            <div className="h-3 bg-slate-200 rounded col-span-4"></div>
                        </div>
                    </div>
                    <div className="space-y-3 pt-10 pb-5">
                        <div className="h-3 bg-slate-200 rounded"></div>
                        <div className="h-3 bg-slate-200 rounded col-span-1"></div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-3 bg-slate-200 rounded col-span-3"></div>
                        </div>
                        <div className="h-3 bg-slate-200 rounded"></div>
                    </div>
                    <div className="w-full px-">
                        <div className="grid grid-cols-4">
                            <div className="h-3 bg-slate-200 rounded col-span-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
