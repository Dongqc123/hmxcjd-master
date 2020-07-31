import { hot } from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'dw-mx';
import 'dw-mx/dist/antd.min.css';
import 'dw-mx-flex/lib/style/index.css';
import 'dw-mx-dialog/lib/style/index.css';
import 'dw-mx-rem/lib/style/index.css';
import './index.less';
import 'dw-mx-extend';
import 'dw-mx-extend/lib/style/modal-extend.less';

import CurrentUser from "@/auth/CurrentUser"

/**
 * STARTER
 */
// 1. 初始化 moment
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import zhCN from 'dw-mx/es/locale/zh_CN';

// 2. 组织路由
import { renderRoutes,BrowserRouter} from 'dw-mx-router';
import config from './config';

import { request, SEFErrorHandler, SEFResponseParser } from 'dw-mx-request';


// request
request.setBaseUrl(BASE_REQUEST_URL);
request.setResponseParsers(new SEFResponseParser());
request.setErrorHandlers(new SEFErrorHandler());
request.setRequestFilters({
    doFilter: (request) => {
        request.headers['Access-Token'] = CurrentUser.getAccessToken();
    }
});

const App = () => (
    <>
        <ConfigProvider locale={zhCN}>
            <BrowserRouter basename={BASE_ROUTE_URL}>{renderRoutes(config.routes)}</BrowserRouter>
        </ConfigProvider>
    </>
);

const HotApp = hot(App);
// 4. 渲染
ReactDOM.render(<HotApp />, document.getElementById('mousex-app'));
