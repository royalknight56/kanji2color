# kanji2color

js 库，将汉字颜色转为对应的 hex 颜色

使用方法：

    npm install kanji2color

```js
import { kanji2color, color2Kanji } from "kanji2color";

console.log(kanji2color("红色")); // "#FF0000"

console.log(kanji2color("你好")); // undefined

console.log(color2Kanji("#FF0000")); // [ '红色' ]

console.log(color2Kanji("#FF0000aa")); // undefined
```
