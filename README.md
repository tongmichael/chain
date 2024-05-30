# @suc/chain

在Object和Array的原型链上提供方便的链式操作方法.

```javascript
const fruits = [
    {name: 'banana', amount: 2},
    {name: 'apple', amount: 4},
    {name: 'pineapple', amount: 2},
    {name: 'mango', amount: 1}
];
fruits
    .concat([{name: 'apple', amount: 100}])
    .sortedBy('name', 'amount')
    .reverse()
    .tap(arr => arr.unshift({name: 'pineapple', amount: 100}))
    .thru(arr => arr[0])
```

// 返回值可能为空 .xxxOrNull
