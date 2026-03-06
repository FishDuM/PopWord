# PopWord 弹词 - 单词学习浏览器插件

PopWord 弹词是一个浏览器插件，通过点击网页任意位置显示单词及读音，帮助用户在浏览网页的同时学习英语单词。

## 功能特性

- **点击显示单词**：鼠标左键显示下一个单词，右键显示上一个单词
- **音频发音**：自动播放单词发音，支持自定义音频 API
- **词库选择**：支持从多个词库中选择，默认使用 CET4 词汇
- **记忆功能**：自动记录单词学习历史，按日期分类
- **监控面板**：查看单词学习历史，支持点击单词播放音频
- **跨页面单词序列**：所有页面使用同一个单词序列，确保学习连续性
- **浮动效果**：单词以浮动效果显示，慢慢上升并淡出

## 安装方法

1. 克隆或下载本项目到本地
2. 打开 Chrome 浏览器，进入 `chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择项目目录，完成安装

## 使用说明

1. 安装完成后，浏览器右上角会出现 PopWord 弹词 插件图标
2. 点击插件图标打开设置面板，调整各项设置
3. 在任意网页上点击鼠标左键，显示下一个单词
4. 点击鼠标右键，显示上一个单词
5. 点击"监控面板"按钮，查看单词学习历史
6. 点击"删除缓存"按钮，清除所有缓存和学习历史

## 项目结构

```
├── word/              # 词库文件夹
│   └── CET4-顺序.json   # CET4词汇词库
├── content.js          # 核心功能脚本
├── manifest.json       # 插件配置文件
├── popup.html          # 设置面板HTML
├── popup.js            # 设置面板脚本
└── styles.css          # 样式文件
```

## 技术栈

- **前端**：HTML, CSS, JavaScript
- **浏览器扩展**：Chrome Extension Manifest V3
- **存储**：Chrome Storage API
- **音频**：Web Audio API, Youdao Dictionary API

## 词库格式

词库文件使用 JSON 格式，每个单词包含以下信息：

```json
{
  "word": "abruptly",
  "translations": [
    {
      "translation": "突然地",
      "type": "adv"
    }
  ]
}
```

## 词库来源

本项目的词库来源于 [https://github.com/KyleBing/english-vocabulary](https://github.com/KyleBing/english-vocabulary)

## 开发指南

1. 修改 `content.js` 文件以调整核心功能
2. 修改 `popup.html` 和 `popup.js` 文件以调整设置面板
3. 在 `word` 文件夹中添加新的词库文件
4. 修改 `manifest.json` 文件以调整插件配置

## 注意

本项目使用AI开发，仅供英语学习使用

---

希望这个插件能帮助你在浏览网页的同时学习英语单词！
