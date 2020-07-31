import React from 'react';
import { Menu,Space } from 'dw-mx';
import { RowFlex, FlexItem } from 'dw-mx-flex';
import { Link, useLocation } from 'dw-mx-router';

export default function UserSettings(props) {
    const { route, children } = props;

    const location = useLocation();

    return (
        <RowFlex style={{ height: '100%' }}>
            <FlexItem flexBasic={223} className={'app-lrmenu-left'}>
                <Menu mode="inline" selectedKeys={[location.pathname]}>
                    {route.routes
                        .filter(({ redirect }) => !redirect)
                        .map(route => {
                            return (
                                <Menu.Item key={route.path}>
                                    <Link to={route.path}>{route.name}</Link>
                                </Menu.Item>
                            );
                        })}
                </Menu>
            </FlexItem>
            <FlexItem>{children}</FlexItem>
        </RowFlex>
    );
}
