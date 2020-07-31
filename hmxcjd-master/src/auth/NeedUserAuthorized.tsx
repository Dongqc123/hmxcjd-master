import React, { useEffect, useState } from 'react';
import { Redirect } from 'dw-mx-router';
import CurrentUser from './CurrentUser';

/*
     当前使用路由authorizedId作为权限标识，
     首先获取用户可访问的路由name列表，假设用户可访问路由列表["首页","收件","角色管理","收件详情"];
      */

// 权限筛选逻辑
const filterAuthorizedRoutes = (routes, authorityKey, authority) => {
    return routes.filter(item => {
        // 根目录保留，不然显示不出左侧菜单
        if (item.path == '/') {
            return item;
        }
        if (!item[authorityKey] && !item.routes) {
            return item;
        }

        if (item[authorityKey]) {
            if (authority.indexOf(item[authorityKey]) > -1) {
                if (item.routes) {
                    item.routes = filterAuthorizedRoutes(item.routes, authorityKey, authority);
                }
                return item;
            }
        } else {
            if (item.routes) {
                item.routes = filterAuthorizedRoutes(item.routes, authorityKey, authority);
            }
            return item;
        }
    });
};

const DEFAULT_AUTHORITY = ['home'];

export default function NeedUserAuthorized(props) {
    const { children, route} = props;
    const { routes } = route;

    const [newRoutes, updateNewRoutes] = useState(routes);

    useEffect(
        () => {
            if (!CurrentUser.isLoggedIn()) {
                return;
            }

            // 构造默认权限
            const data = filterAuthorizedRoutes(routes, 'authorizedId', DEFAULT_AUTHORITY);
            updateNewRoutes(data);

            // 动态附加权限
            /*HttpUtils.post('roles/queryMenuForMe', {}, true).then(ret => {
                const data = filterAuthorizedRoutes(routes, 'authorizedId', ret);
                updateNewRoutes(data);
            });*/
        },
        [CurrentUser.isLoggedIn()]
    );

    if (CurrentUser.isLoggedIn()) {
        return React.cloneElement(children, {
            ...children.props,
            route:{
                ...route,
                routes:newRoutes
            }
        });
    } else {
        return <Redirect to={'/login'} />;
    }
}
