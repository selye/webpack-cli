import { useEffect } from 'react';
import './index.less';
import { Button, Input } from 'antd';

export const Header = () => {
  const root = document.documentElement;

  // // 获取颜色变量
  // _style.getPropertyValue('--background-color').trim();
  // // 设置颜色变量
  // root.style.setProperty('--background-color', 'green');
  // // 删除颜色变量

  useEffect(() => {
    root.className = 'light';
  }, []);

  const changeTheme = () => {
    console.log('切换主题');
    let _style = getComputedStyle(root);
    console.log();
    root.className === 'dark' ? (root.className = 'light') : (root.className = 'dark');
    // root.style.setProperty('--background-color', 'green');
  };

  return (
    <div className="header">
      <Button onClick={changeTheme} type="primary">
        primary
      </Button>
      <Button onClick={changeTheme}>default</Button>
      <Input placeholder="please input" />
    </div>
  );
};
