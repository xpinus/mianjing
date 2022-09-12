---
sort: 41
---

# HTTP2.0

通过压缩头部、多路复用、优先级等技术，缩短网页加载速度并提高安全性，以解决HTTP1.1存在的不足。

主要借助了下面几个技术：

1. 二进制分帧

二进制分帧层介于应用层与传输层之间。

二进制：忽略由文本多样性（图片、文字、视频...）导致的多种场景。

帧：将所有传输的消息分为更小的消息和帧。

2. 首部压缩

2.0借助SPDY的DEFLATE和HTTP2.0的HPACK算法对头部进行压缩，并在两段维护一个索引表，记录出现过的header及键名，将键名传递给对端，即可让对端通过键名查找对应值来快速响应数据，来提高效率。

3. 多路复用

借助二进制分帧层，将消息分解为独立的帧，在共享TCP链接的基础上，交错发送数据，接收响应。另一端再根据流标识符和首部进行组装，解决旧版HTTP头部阻塞问题。

4. 请求优先级

对独立分帧的传输顺序进行调整，以起到优化的效果。

5. 服务器推送

一次请求，多次响应。

客户端请求主页，服务器响应主页，并响应可能会用到的logo和样式表，减轻数据传送的冗余步骤，加快响应速度。推送内容必须是双方确认过的。