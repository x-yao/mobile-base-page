# 基本移动端开发模板

---
>个人在使用中结合一些经验以及工具总结出的一个基本的开发模板。在开发新的移动端项目（小型无具体框架）时可以以此模板为基础构建页面。也可以自己取所需进行改造。
具体思路是以sass作为css基本编辑工具，autoprefixer处理编译后的css文件，然后进行相应的压缩。js包含基本库，以及提供压缩。compass处理雪碧图。

首先请确保安装[node](https://nodejs.org/)

其次安装sass以及compass：
可以点这个学习安装[sass](http://www.w3cplus.com/sassguide/install.html)

然后继续运行`gem install compass`安装compass
>如果不想使用compass请将项目下`nocompass.js`替换`Gruntfile.js`。

依赖安装完毕后执行：

    npm install

开发过程中，`css`文件在`sass`目录下，新建`scss`文件进行开发，js文件在`js/js-debug`文件夹进行开发，图片按文件夹保存compass会将文件夹里图片自动拼合成雪碧图，直接保存在images目录不会进行拼合。
执行

    grunt local
    
会自动将`scss`文件编译成`css`文件保存在`css/css-debug`里面，然后autoprefixer编译后生成在`css/css`里，最后压缩版在`css/css-min`里面。
js文件会将`js/js-debug`里面的js压缩到`js-min`
`grunt local`命令会开启监控，如果你修改`sass`目录，`js/js-debug`目录，下文件会自动进行编译处理。如果只在命令执行`grunt`则不会进入文件监控。

文件结构：
![文件结构][1]

工作流
![工作流][2]

[1]: http://moussecake.u.qiniudn.com/QQ20150407-1@2x.png
[2]: http://moussecake.u.qiniudn.com/QQ20150407-2@2x.png