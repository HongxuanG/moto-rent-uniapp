## 2.0.9（2021-12-01）

## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0 重磅发布，利剑出鞘，一统江湖

1. 优化 swiper 的 height 支持 100%值(仅 vue 有效)，修复嵌入视频时 click 事件无法触发的问题
2. 优化 tabs 组件对 list 值为空的判断，或者动态变化 list 时重新计算相关尺寸的问题
3. 优化 datetime-picker 组件逻辑，让其后续打开的默认值为上一次的选中值，需要通过 v-model 绑定值才有效
4. 修复 upload 内嵌在其他组件中，选择图片可能不会换行的问题

## 2.0.8（2021-12-01）

## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0 重磅发布，利剑出鞘，一统江湖

1. 修复 toast 的 position 参数无效问题
2. 处理 input 在 ios nvue 上无法获得焦点的问题
3. avatar-group 组件添加 extraValue 参数，让剩余展示数量可手动控制
4. tabs 组件添加 keyName 参数用于配置从对象中读取的键名
5. 处理 text 组件名字脱敏默认配置无效的问题
6. 处理 picker 组件 item 文本太长换行问题

## 2.0.7（2021-11-30）

## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0 重磅发布，利剑出鞘，一统江湖

1. 修复 radio 和 checkbox 动态改变 v-model 无效的问题。
2. 优化 form 规则 validator 在微信小程序用法
3. 修复 backtop 组件 mode 参数在微信小程序无效的问题
4. 处理 Album 的 previewFullImage 属性无效的问题
5. 处理 u-datetime-picker 组件 mode='time'在选择改变时间时，控制台报错的问题

## 2.0.6（2021-11-27）

## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0 重磅发布，利剑出鞘，一统江湖

1. 处理 tag 组件在 vue 下边框无效的问题。
2. 处理 popup 组件圆角参数可能无效的问题。
3. 处理 tabs 组件 lineColor 参数可能无效的问题。
4. propgress 组件在值很小时，显示异常的问题。

## 2.0.5（2021-11-25）

## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0 重磅发布，利剑出鞘，一统江湖

1. calendar 在 vue 下显示异常问题。
2. form 组件 labelPosition 和 errorType 参数无效的问题
3. input 组件 inputAlign 无效的问题
4. 其他一些修复

## 2.0.4（2021-11-23）

## [点击加群交流反馈：232041042](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0 重磅发布，利剑出鞘，一统江湖

0. input 组件缺失@confirm 事件，以及 subfix 和 prefix 无效问题
1. component.scss 文件样式在 vue 下干扰全局布局问题
2. 修复 subsection 在 vue 环境下表现异常的问题
3. tag 组件的 bgColor 等参数无效的问题
4. upload 组件不换行的问题
5. 其他的一些修复处理

## 2.0.3（2021-11-16）

## [点击加群交流反馈：1129077272](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0 重磅发布，利剑出鞘，一统江湖

1. uView2.0 已实现全面兼容 nvue
2. uView2.0 对 1.x 进行了架构重构，细节和性能都有极大提升
3. 目前 uView2.0 为公测阶段，相关细节可能会有变动
4. 我们写了一份与 1.x 的对比指南，详见[对比 1.x](https://www.uviewui.com/components/diff1.x.html)
5. 处理 modal 的 confirm 回调事件拼写错误问题
6. 处理 input 组件@input 事件参数错误问题
7. 其他一些修复

## 2.0.2（2021-11-16）

## [点击加群交流反馈：1129077272](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0 重磅发布，利剑出鞘，一统江湖

1. uView2.0 已实现全面兼容 nvue
2. uView2.0 对 1.x 进行了架构重构，细节和性能都有极大提升
3. 目前 uView2.0 为公测阶段，相关细节可能会有变动
4. 我们写了一份与 1.x 的对比指南，详见[对比 1.x](https://www.uviewui.com/components/diff1.x.html)
5. 修复 input 组件 formatter 参数缺失问题
6. 优化 loading-icon 组件的 scss 写法问题，防止不兼容新版本 scss

## 2.0.0(2020-11-15)

## [点击加群交流反馈：1129077272](https://jq.qq.com/?_wv=1027&k=KnbeceDU)

# uView2.0 重磅发布，利剑出鞘，一统江湖

1. uView2.0 已实现全面兼容 nvue
2. uView2.0 对 1.x 进行了架构重构，细节和性能都有极大提升
3. 目前 uView2.0 为公测阶段，相关细节可能会有变动
4. 我们写了一份与 1.x 的对比指南，详见[对比 1.x](https://www.uviewui.com/components/diff1.x.html)
5. 修复 input 组件 formatter 参数缺失问题
