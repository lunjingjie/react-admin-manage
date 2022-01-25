import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';

// 渲染单独菜单组件
const renderMenu = (element) => {
  console.log(element.title);
  return (
    <Menu.Item key={element.key}>
      <Link to={element.key}>
        {element.icon && <Icon type={element.icon} />}
        <span className="nav-text">{element.title}</span>
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
  console.log(menus);
  return (
    <Menu { ...props }>
      {menus.menus.forEach((item) => {
        item.subs ? renderSubMenu(item) : renderMenu(item)
      })}
    </Menu>
  );
};

export default result;