<!--
 * @Author: last order
 * @Date: 2019-08-08 18:10:27
 * @LastEditTime : 2020-02-15 14:48:26
 -->
[[toc]]

## 介绍

LoPlayer是一个基于原生js实现的一个播放器，支持了常见的mp4、hls、mpeg-dash等格式，采用半透明式的风格，整体看上去比较简洁。

## 安装

```
暂无。
```

## 基本使用

```ts
interface Options {
  src: Array<object> [
    {
      src: string,
      type: string
    }
  ],
  autoPlay?: boolean,
  loop?: boolean,
  fullScreen?: boolean,
  screenShot?: boolean,
  speed?: number[],
  defaultSpeed?: number
}

const LoPlayer = new LoPlayer('#LoPlayer', options: Options)

```
### 参数说明

参数 | 含义 | 默认值
---|---|---
src | 要播放的视频列表, 里面是个对象，接受2个参数， src代表地址，type是类型，可选项为hls、dash、mp4三种，其余将自动检测。 | []
autoPlay | 自动播放 | false
loop | 循环播放 | false
fullScreen | 全屏 | false
screenShot | 截图 | false
speed | 播放速度，0.25到2之间 | [0.25, 0.5, 1, 1.25, 1.5, 1.75, 2]
defaultSpeed | 默认播放速度 | 1

## 计划

- 清晰度切换 (看情况，没资源进行测试)
- 上下集切换
- 播放模式调整
- 视频信息查看 (看情况)
- 画中画 (看情况)
- 弹幕功能（最后实现）

## 重点

- 不支持移动端
- 暂未完成，不建议使用
