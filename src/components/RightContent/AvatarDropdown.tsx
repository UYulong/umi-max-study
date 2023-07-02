import React from 'react';
import { history, useModel } from '@umijs/max'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const AvatarDropdown: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState')

  const items: MenuProps['items'] = [
    {
      label: '个人设置',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '退出',
      key: '2',
      icon: <LogoutOutlined />,
    }
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '2') {
      localStorage.removeItem('userInfo')
      setInitialState((s) => ({ ...s, userInfo: null }))
      history.push('/login')

      console.log(initialState);
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Space wrap>
      <Dropdown.Button menu={menuProps} >
        {initialState?.userInfo.username}
      </Dropdown.Button>
    </Space>
  )
};

export default AvatarDropdown;