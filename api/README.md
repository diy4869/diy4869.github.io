<!--
 * @Author: last order
 * @Date: 2020-02-16 21:03:25
 * @LastEditTime: 2020-02-16 21:19:13
 -->
## API

### 获取当前video实例
```ts
new LoPlayer().player
```

### getCurrentTime
- 参数 无
- 描述 当前播放时间
- 用法
```ts
  new LoPlayer().getCurrentTime():number
```

### getDuration
- 参数 无
- 描述 获取视频结束时间
- 用法
```ts
  new LoPlayer().getDuration():number
```

### seekTo 

- 参数 time
- 描述 跳转到指定位置
- 用法
```ts
  new LoPlayer().seekTo(number time)
```

### setVolume

- 参数 volme
- 描述 设置音量，0 - 1之间
- 用法
```ts
  new LoPlayer().setVolume(number volume)
```