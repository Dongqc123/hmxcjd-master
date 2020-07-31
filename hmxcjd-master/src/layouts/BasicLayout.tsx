import React from 'react';
import { Link } from 'dw-mx-router';
import { UserOutlined, LockOutlined, LogoutOutlined } from 'dw-mx-icons';
import ProLayout from 'dw-mx-layout-antdpro';
import { Helmet } from 'react-helmet';

import GlobalHeader from '../components/GlobalHeader';
import PageHeader from './PageHeader';
import './style/index.less';
import ErrorBoundary from './ErrorBoundary';

export interface BasicLayoutProps {
    logo: any;
    route: any;
    menuTheme: 'light' | 'dark';
    title: string;
}

const BasicLayout: React.FunctionComponent<BasicLayoutProps> = props => {
    const { children, route, logo, menuTheme,title } = props;
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="shortcut icon" href={logo} />
            </Helmet>
            <ProLayout
                siderWidth={240}
                navTheme={menuTheme}
                route={route}
                title={title}
                logo={logo}
                fixSiderbar={true}
                fixedHeader={true}
                menuItemRender={(menuItemProps, defaultDom) => {
                    if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
                        return defaultDom;
                    }

                    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
                }}
               menuHeaderRender={(logoDom, titleDom) => (
                    <Link to="/">
                        {logoDom}
                        {titleDom}
                    </Link>
                )}
                rightContentRender={() => <GlobalHeader />}
            >
                <PageHeader>
                    <ErrorBoundary>{children}</ErrorBoundary>
                </PageHeader>
            </ProLayout>
        </>
    );
};

export default BasicLayout;
