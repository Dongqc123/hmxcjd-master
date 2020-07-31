import React from 'react';
import dynamic from 'dw-mx-dynamic';
import logo from '../assets/logo.png';
import {
    HomeOutlined,
    SettingOutlined,
    SolutionOutlined,
    CarryOutOutlined,
    DownloadOutlined,
    UploadOutlined,
    HighlightOutlined,
    FormOutlined,
    EyeOutlined,
    FileDoneOutlined,
    CheckCircleOutlined,
    BarChartOutlined,
    ToolOutlined
} from 'dw-mx-icons';

// 整体布局
import BasicLayout from '../layouts/BasicLayout';

// 登录、异常页
import Login from '../pages/Login';
import Error404 from '../pages/Error404';

// 认证组件
import NeedUserAuthorized from '../auth/NeedUserAuthorized';

export default {
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/error/404',
            component: Error404
        },
        {
            path: '/',
            component: BasicLayout,
            props: {
                title: '工伤鉴定平台',
                logo
            },
            wrappers: [NeedUserAuthorized],
            routes: [
                {
                    path: '/',
                    redirect: 'chart'
                },
                {
                    path: 'home',
                    component: dynamic(() => import(/* webpackChunkName: "home" */ '../pages/home')),
                    props: {},
                    name: '首页',
                    icon: <HomeOutlined/>
                },
                {
                    path: 'register',
                    props: {},
                    name: '现场签到',
                    icon: <FormOutlined />,
                    routes: [{
                        path: "registerSelect",
                        name: "现场签到查询",
                        component: dynamic(() => import(/* webpackChunkName: "LayoutDemo" */ '../pages/register/RegisterSelect/RegisterSelect')),
                    }, {
                            path: "peopleSelect",
                            name: "现场鉴定人员查询",
                            component: dynamic(() => import(/* webpackChunkName: "LayoutDemo" */ '../pages/register/PeopleSelect/PeopleSelect')),
                    }, {
                            path: "manualRegister",
                            name: "人工签到",
                            component: dynamic(() => import(/* webpackChunkName: "LayoutDemo" */ '../pages/register/ManulRegister/ManulRegister')),
                    }]
                },
                {
                    path: 'identify',
                    props: {},
                    name: '现场鉴定维护',
                    icon: <EyeOutlined />,
                    routes: [{
                        path: "planDefend",
                        name: "现场鉴定计划维护",
                        component: dynamic(() => import(/* webpackChunkName: "LayoutDemo" */ '../pages/identify/PlanDefend/PlanDefend')),
                    }, {
                        path: "officeDenfend",
                        name: "现场鉴定科室维护",
                        component: dynamic(() => import(/* webpackChunkName: "LayoutDemo" */ '../pages/identify/OfficeDefend/OfficeDefend')),
                    }, {
                        path: "expertsDefend",
                        name: "现场鉴定专家维护",
                        component: dynamic(() => import(/* webpackChunkName: "LayoutDemo" */ '../pages/identify/ExpertsDefend/ExpertsDefend')),
                    }]
                },
                {
                    path: 'reconsider',
                    component: dynamic(() => import(/* webpackChunkName: "home" */ '../pages/reconsider/ReconsiderPage')),
                    props: {},
                    name: '复议',
                    icon: <FileDoneOutlined />
                },
                {
                    path: 'affirm',
                    component: dynamic(() => import(/* webpackChunkName: "home" */ '../pages/affirm/AffirmPage')),
                    props: {},
                    name: '确认',
                    icon: <CheckCircleOutlined />
                },
                {
                    path: 'statistics',
                    component: dynamic(() => import(/* webpackChunkName: "home" */ '../pages/statistics/statisticsPage')),
                    props: {},
                    name: '统计',
                    icon: <BarChartOutlined />
                },
                {
                    path: 'defend',
                    component: dynamic(() => import(/* webpackChunkName: "home" */ '../pages/defend/DefendPage')),
                    props: {},
                    name: '维护',
                    icon: <ToolOutlined />
                },
                {
                    path: 'chart',
                    name: '图表',
                    component: dynamic(() => import(/* webpackChunkName: "chart" */ '../pages/charts/chart1'))
                },
                {
                    path: 'pdf',
                    name: 'PDF',
                    component: dynamic(() => import(/* webpackChunkName: "pdf" */ '../pages/pdf/PDF'))
                },


            ]
        }
    ]
};
