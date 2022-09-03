---
sort: 10
---

# iframe有哪些缺点

* iframe会阻塞主页面的onLoad事件
* 搜索引擎不能读取不利于SEO
* iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面并行加载
* 如果要使用iframe，最好通过js动态给iframe添加src属性，避免上述问题