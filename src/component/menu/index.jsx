import { Menu } from 'antd';
// import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { PieChartOutlined } from '@ant-design/icons';

// 渲染单独菜单组件
const renderMenu = (element) => {
  return (
    <Menu.Item key={element.key}  icon={<PieChartOutlined />}>
      <Link to={element.path}>
        {/* {element.icon && <Icon type={element.icon} />} */}
        123213
      </Link>
    </Menu.Item>
  );
};

// 渲染子菜单组件
const renderSubMenu = (element) => (
  <Menu.SubMenu key={element.key}>
    {element.subs.map(item => renderMenu(item))}
  </Menu.SubMenu>
);

const result = ({ menus, ...props }) => {
  return (
    <Menu { ...props }>
      {menus.menus.forEach((item) => {
        console.log(renderMenu(item));
        item.subs ? renderSubMenu(item) : renderMenu(item)
      })}
    </Menu>
    // <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    //           <Menu.Item key="/menu1" icon={<PieChartOutlined />}>
    //             <Link to="/menu1">Option 1</Link>
    //           </Menu.Item>
    //           <Menu.Item key="/menu2" icon={<PieChartOutlined />}>
    //             <Link to="/menu2">Option 2</Link>
    //           </Menu.Item>
    //           <Menu.Item key="9" icon={<PieChartOutlined />}>
    //             Files
    //           </Menu.Item>
    //         </Menu>
  );
};

export default result;