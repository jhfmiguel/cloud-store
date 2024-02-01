import Logo from './Logo'
import Search from './Search'
import Utils from './Utils'

export default function Header() {
    return (
        <div className='flex flex-row z-40 fixed bg-yellow-400 dark:bg-neutral-950 text-neutral-950 dark:text-yellow-400 h-12 justify-start items-center w-full'>
            <div className="basis-1/4">
                <Logo/>
            </div>
            <div className="basis-1/2">
                <Search/>
            </div>
            <div className="basis-1/4">
                <Utils/>
            </div>
        </div>
    )
}