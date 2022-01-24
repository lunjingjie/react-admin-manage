import {
  Component
} from 'react';
import menuList from './menu';
import componentList from './componentMatch';
import {
  Routes,
  Route
} from 'react-router-dom';

/**
 * 系统路由配置
 */
export default class CRouter extends Component {
  render() {
    return ( 
      <Routes>
      {
        menuList.menus.map(r => {
          const route = r => {
            const Component = componentList[r.component];
            return ( 
              <Route key={r.key}
                      exact
                      path={r.key}
                      element={<Component />}
              ></Route>
            );
          }
          return r.component ? route(r) : r.subs.map(r => route(r));
        })
      }
      </Routes>
    );
  }
}