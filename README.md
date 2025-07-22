### 一些命令
`bunx --bun shadcn@2.6.0 add --all` 添加所有的shadcn 的组件
``

## 关于shadcn 组件的一些说明
一： 常用类名
`tracking-tight` 用来控制字间距（偏紧）
`tracking-wide` 用来控制字间距（偏宽）
`tracking-normal` 用来控制字间距（正常）

二： 组件
`SidebarProvider`： 是侧边栏的上下文环境，通常需要包裹整个应用

### 关于 drizzle 组件的一些说明
介绍：它是一个基于PostgreSQL 的数据库操作库，它提供了一个简单的方式来创建和管理数据库，以及一个安全的方式来存储和处理数据。（最终是要上云的，也就是上到Neon上去的）
一： drizzle 常用命令
`bunx drizzle-kit push:pg` 用来将本地 数据库迁移到云数据库中
`bunx drizzle-kit studio` 用来打开数据库可视化工具

### 关于ngrok 介绍和说明
介绍：ngrok 是用来进行一个内网穿透的，它可以将本地的服务暴露到公网中，这样就可以在公网中访问到本地的服务了；
方便后续进行webhook 操作（webhook是一种通过 HTTP 请求实现事件驱动通信的机制，常用于系统间实时数据传递或通知。简单来说，它是一个用户定义的回调 URL）
二： ngrok 常用命令
`ngrok http 3000` 用来将本地的3000端口暴露到公网中，这样就可以在公网中访问到本地的服务了；
仅仅在开发阶段需要，因为需要这个来进行webhook 的开发和调试，在生产阶段是不需要的；比如当使用clerk 进行登陆的时候，需要同时将clerk 的webhook 配置到ngrok 上，这样才可以在clerk 登陆成功后，将用户信息同步到数据库中；

### 关于Neon 介绍和说明
介绍：Neon 是一个基于PostgreSQL 的云数据库，它提供了一个简单的方式来创建和管理数据库，以及一个安全的方式来存储和处理数据。
三： Neon 常用命令
`bunx neon db create` 用来创建一个数据库
`bunx neon db connect` 用来连接一个数据库

### 关于 Clerk 介绍和说明
介绍：Clerk 是一个基于PostgreSQL 的云数据库，它提供了一个简单的方式来创建和管理数据库，以及一个安全的方式来存储和处理数据。
四： Clerk 常用命令
`bunx clerk db create` 用来创建一个数据库
`bunx clerk db connect` 用来连接一个数据库