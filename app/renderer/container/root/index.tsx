import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { ROUTER_ENTRY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';
import { useSelector } from 'react-redux';
import Logo from '@assets/logo.png';

const Root = () => {
  const appName = useSelector((state: any) => state.globalModel.appName);
  console.log(appName);
  const history = useHistory();
  const onRouterToLink = (router: TSRouter.Item) => {
    if (!isHttpOrHttpsUrl(router.url)) {
      history.push(router.url);
    } else {
      console.log('欢迎');
      shell.openExternal(router.url);
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} />
        <div styleName="title">Super Board</div>
        <div styleName="tips">一个模板建立制作平台,让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">Copyright © 2018-{new Date().getFullYear()} All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
