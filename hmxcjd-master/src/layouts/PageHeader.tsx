import {Breadcrumb} from 'dw-mx';
import React, { useContext } from 'react';
import { PageHeaderProps } from 'dw-mx/lib/page-header';
import RouteContext, { RouteContextType } from 'dw-mx-layout-antdpro/es/RouteContext';
import {ArrowLeftOutlined} from 'dw-mx-icons';
import {ColFlex,FlexItem} from "dw-mx-flex";
import {useHistory} from "dw-mx-router";
import { useLocation } from 'dw-mx-router';

import 'dw-mx-layout-antdpro/';
export interface PageHeaderTabConfig {
}

export interface PageHeaderWrapperProps
    extends PageHeaderTabConfig,
        Omit<PageHeaderProps, 'title'> {
}

const defaultPageHeaderRender = (
    props: PageHeaderWrapperProps,
    value: RouteContextType,
): React.ReactNode => {
    const {
    } = props;
    // 修改面包屑内容
    const breadcrumb = value.breadcrumb;
    const routes = breadcrumb.routes;
    const breadcrumbDom = [];
    const history = useHistory();
    const allRoute = value.route;
    if(routes){
        const result = getRouteData(allRoute.routes,routes[routes.length-1].breadcrumbName);
        if(result){
            for(let i = 0;i < routes.length;i++){
                const path = routes[i].path;
                const breadcrumbName = routes[i].breadcrumbName;
                if(i == 0){
                    breadcrumbDom.push(<Breadcrumb.Item separator={"|"} onClick={()=>{history.goBack();}}>
                        <ArrowLeftOutlined />
                    </Breadcrumb.Item>);
                }else{
                    breadcrumbDom.push(<Breadcrumb.Item separator={"|"} href={path}>
                        {breadcrumbName}
                    </Breadcrumb.Item>);
                }
            }
        }
    }
    if(breadcrumbDom.length > 0){
        return (
            <div className={'app-breadcrumb'}>
                <Breadcrumb separator="|">
                    {breadcrumbDom}
                </Breadcrumb>
            </div>
        );
    }else{
        return null;
    }
};

const getRouteData = (routes,routeName) => {
    for(let i = 0;i< routes.length;i++){
        if(routes[i].name == routeName){
            if(routes[i].showBreadcrumb){
                return true;
            }else{
                return false;
            }
        }else if(routes[i].routes){
            return getRouteData(routes[i].routes,routeName);
        }
    }
};

const PageHeader: React.SFC<PageHeaderWrapperProps> = (props) => {
    const { children} = props;
    const value = useContext(RouteContext);
    const location = useLocation();

    const style = {};
    if(location.pathname === "/home"){
        style["margin"] = 0;
    }

    return (
            <ColFlex style={{backgroundColor: location.pathname === "/home" ? "transparent" : "#fff"}}>
                    {defaultPageHeaderRender(props, value)}
                <FlexItem className={'app-data-area'} style={style}>
                        {children}
                </FlexItem>
            </ColFlex>
    );
};

export default PageHeader;
