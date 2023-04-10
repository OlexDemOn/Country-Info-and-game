import { LayoutProps } from './layout.props';
import styles from './layout.module.scss';
import cn from 'classnames';
import Footer from './Footer/footer';
import { FunctionComponent } from 'react';
import Sidebar from './Sidebar/sidebar';
import { BrowserRouter } from 'react-router-dom';

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <BrowserRouter >
            <div className={styles.wrapper}>
                <Sidebar className={styles.sidebar} />
                <div className={styles.body}>
                    {children}
                </div>
                <Footer className={styles.footer} />
            </div>
        </BrowserRouter >

    )
}

export default function withLayout<T extends Record<string, unknown>>(Component: FunctionComponent<T>) {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}