<!--
 * @Author: last order
 * @Date: 2019-08-08 18:10:27
 * @LastEditTime : 2020-02-14 15:26:00
 -->
## 例子

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

const LoPlayer = new LoPlayer('#element', options: Options)
```
