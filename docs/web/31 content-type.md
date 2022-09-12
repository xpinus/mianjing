---
sort: 31
---
# 几种重要的content-type 的应用

参考：https://juejin.cn/post/6966874464323633183

Content-type在请求头、响应头中都存在，在请求头中的它的作用是告知服务器请求参数的数据类型（MIME类型），服务器可以用合适的方法去处理它。在响应头中的作用是告知浏览器此次响应内容的数据类型，客户端可以用合适的方法去处理它。

**multipart/form-data**

这种类型一般用在上传二进制文件，比如上传图片或者上传文件等，也可用于包含文件的表单提交。

**application/json**

一般都用于响应头，但是现在也普遍用于请求头，用于告诉服务器消息主体是序列化后的JSON字符串。

**application/x-www-form-urlencoded**

表单默认的提交数据的格式，数据被格式化为key:value的形式，并进行编码。

**text/html**

将文件的content-type设置为text/html的形式，浏览器在获取到这种文件时会自动调用html的解析器对文件进行相应的处理。

**text/plain**

将文件设置为纯文本的形式，浏览器在获取到这种文件时并不会对其进行处理。

