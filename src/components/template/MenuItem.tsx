import Link from 'next/link';

interface MenuItemProps {
    url: string
    text: string
    icon?: any
}

export default function MenuItem( props: MenuItemProps ) {
    return (
        <li className={`hover:bg-neutral-700 dark:hover:bg-neutral-800` }>
            <Link href={ props.url }>
                <div className={ `flex justify-start items-center w-48 h-8 mx-3 text-stone-100 dark:text-yellow-600` }>
                    { props.icon }
                    <span className="ml-4 mt-1.5 text-base font-ligh text-stone-100 dark:text-yellow-600">
                        { props.text }
                    </span>
                </div> 
            </Link>
        </li>
    )
}