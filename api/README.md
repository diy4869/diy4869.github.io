<!--
 * @Author: last order
 * @Date: 2020-02-16 21:03:25
 * @LastEditTime: 2020-05-04 15:56:32
 -->
## API

### 获取当前video实例
```ts
  new LoPlayer().player
```

### 获取当前播放时间
```ts
  new LoPlayer().currentTime
```

### 获取结束时间
```ts
  new LoPlayer().duration
```

### 播放
```ts
  new LoPlayer().play()
```

### 暂停
```ts
  new LoPlayer().pause()
```

### 切换
```ts
  new LoPlayer().toggle()
```

### 跳转到指定时间 
```ts
  new LoPlayer().seekTo(number time)
```

### setVolume
- 描述 设置音量，0 - 1之间
- 用法
```ts
  new LoPlayer().setVolume(number volume)
```

## Events 事件

### 监听video事件
- 用法
```ts
  new LoPlayer().events.nativeOn(event: string, fn: Function)
```

### 移除video事件
- 用法
```ts
  new LoPlayer().events.removeNative(event: string, fn: Function)
```

### 绑定事件
- 描述 绑定事件
- 用法
```ts
  new LoPlayer().events.on(event: string, fn: Function)
```

### 触发事件
- 描述 触发事件，args是需要传递的参数
- 用法
```ts
  new LoPlayer().events.emit(event: string, ...args)
```

### 移除事件
- 描述 移除自定义事件，fn为可选，不传将移除所有
- 用法
```ts
  new LoPlayer().events.remove(event: string, fn?: Function)
```
