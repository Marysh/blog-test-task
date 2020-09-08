import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import GlobalStyle from "../globalStyles"
import {Container, Header, NavLink} from "./myStyledCcomponents";


type LayoutProps = {
    title?: string
}


const Layout: React.FunctionComponent<LayoutProps> = ({children, title}) => (
    <>
        <GlobalStyle/>
        <Head>
            <title>{title || ''}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header>
            <Container>
                <nav style={{display: 'flex', justifyContent: 'space-between'}}>
                    <NavLink>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href={`/posts/new`}>
                            <a>Add Post</a>
                        </Link>
                    </NavLink>
                </nav>
            </Container>
        </Header>
        <Container>
            {children}
        </Container>
    </>
)
export default Layout;