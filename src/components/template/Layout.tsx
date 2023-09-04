import Aside from "./Aside"
import Header from "./Header"
import Main from "./Main"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout( props: LayoutProps ) {
    return (
        <div>
            <Aside />
            <Header title={ props.title } subtitle={ props.subtitle } />
            <Main>
                {props.children}
            </Main>
        </div>
    )
}