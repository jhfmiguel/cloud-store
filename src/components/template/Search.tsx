export default function Search() {
    return (
        <>  
            <div className='flex flex-row justify-center'>
                <form>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-stone-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <div className='flex'>
                            <input type="search" id="default-search" className="border-0 focus:ring-0 rounded md:w-[500px] block p-2 pl-8 text-sm text-neutral-950 dark:text-stone-100 bg-stone-100 dark:bg-neutral-800 " placeholder="Search..." />
                        </div>
                        <button type="submit" className="text-stone-100 dark:text-neutral-950 absolute right-2 bottom-1 bg-neutral-800 dark:bg-yellow-400 hover:bg-neutral-700 dark:hover:bg-yellow-600 font-sm rounded-lg text-sm px-2 py-1">  
                            <svg className="w-3 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}