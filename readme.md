* formatTime 时间戳格式化为时间, formatTime(1516545612, 'Y-M-D h:m:s')
* throlltle 节流函数返回Function, throlltle(function(){}, 1000, true)
* debounce 防抖函数返回Function, debounce(function(){}, 1000, true)
* countDown 倒计时函数返回Object, countDown({time:30, onUpdate: function(t){console.log(t)}, onEnd: function(){}})
* queryURLParam 获取URL的所有query参数返回Object, queryURLParam()
* rgbToHex rgb转化为hex返回String, rgbToHex(9,9,9)
* rgbToHsb rgb转化为hsb返回Object, rgbToHsb(9,9,9)
* hexToRgb hex转化为rgb返回Object, hexToRgb('#fff')|hexToRgb('#ffffff')
* hsbToRgb hsb转化为rgb返回Object, hsbToRgb(9,9,9)
* Tween 缓动函数对象, Tween.Linear...
* arrayToTree 将扁平化树型数组转化嵌套型返回Ojbect|Array, arrayToTree(arr)
* treeToArray 将嵌套树转化扁平数返回Array, treeToArray(tree, keys), keys节点上的字段值
* copy 复制文本, copy(txt)