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
        <>  <div className='dark flex overflow-hidden'>
                <div className='flex flex-col fixed'>
                    <Header />
                </div>
                <div className={ `flex flex-col` } >
                    <div className={ `flex fixed bg-white dark:bg-gray-400` }>
                        <Aside />
                    </div>
                    <div className={ `flex oh` }>
                        <div className={ `flex w-screen bg-gray-400 dark:bg-gray-800` }>
                            <Main>
                                { props.children }
                            </Main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}