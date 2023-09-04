interface MainProps {
    children?: any
}

export default function Main( props: MainProps ) {
    return (
        <div 
            className={` flex flex-col mt-7`}>
            { props.children }
        </div>
    )
}