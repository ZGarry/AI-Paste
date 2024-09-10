# AI-paste 使用说明

## 简介

AI-paste 是一款专为 Visual Studio Code (VSCode) 设计的插件，旨在提供ChatGPT和VSCode交互的桥梁。

一个典型的来自于ChatGPT生成的文本文件如下：

```
// src/components/Sidebar.js
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <Box sx={{ width: '200px', borderRight: 1, borderColor: 'divider' }}>
      <Tabs
        orientation="vertical"
        value={location.pathname}
        aria-label="Sidebar tabs"
      >
        <Tab label="邮件发送页" value="/" component={Link} to="/" />
        {/* 你可以在这里添加更多的Tab */}
      </Tabs>
    </Box>
  );
};

export default Sideba
```

大家之前流程是，复制，找到对应子文件夹，然后创建文件，然后粘贴进去。

但是当我们和AI交互频繁的时候，这个动作的成本非常大，本插件让你可以更快的解决此问题。

只需要两步：

1. 复制内容
2. 按下Ctrl+Shif+V，对应文件夹和内容就床就创建好了。

## 安装

1. 打开 VSCode。
2. 进入扩展市场，搜索 "AI-paste"。
3. 点击 "安装" 按钮，等待安装完成。
4. 安装完成后，点击 "重新加载" 以激活插件。

## 使用方法

1. 复制AI生成的内容（生成内容有Package标志或者//记录的文件标志）
2. Ctrl+Shift+V粘贴（Mac使用Cmd+Shift+V）

## 常见问题

快捷键冲突

- 打开键盘快捷方式设置，检查是否有其他插件或功能占用了相同快捷键。
- 自定义快捷键以避免冲突。

## 反馈与支持

如果您在使用过程中遇到任何问题或有任何建议，请通过以下方式联系我们：

- 在 GitHub 上提交 [Issue](https://github.com/your-repo/ai-paste/issues)。

感谢您使用 AI-paste，希望它能为您的工作带来便利和效率提升！
