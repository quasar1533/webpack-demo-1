## webpack学习
* webpack主要用处转义打包Js代码
### main
* 现在webpack默认安装webpack5，运行`npx webpack`转码后，会转化为ES6语法。
* webpack4 与 webpack的转义区别会很大，注意查看
* webpack4 转义的代码 前面会有很多兼容性代码
* 查看文档，添加配置文件取消警告
* mode 两种模式： development   production
* 学习其他的配置
  * webpack filename hash
----------------------------------------------------------------
* 脚本 build 在最外层package.json中
----------------------------------------------------------------
* 一系列webpack插件    plugins 与 module
* 使用`yarn add <plugin/module> --dev`安装
1. 用webpack插件生成html页面  HTMLWebpackPlugin
   * 查阅插件文档 
2. cssLoader文档
   * css-loader 与 style-loader 仅能将css源文件代码提取出来并在网页的index.html中加入style元素里面放入css代码，但不能转义生成独立css文件
   * 适用于在js文件中import css文件
   *  开发时适用
3. 引入开发用工具取代http-server   webpack-dev-server 文档
   * 注意要将mode该位 development
4. css extract plugin 文档
   * 将css抽成单独的文件于dist目录中，并在main.js link引入
   * 适合发布时使用
5. 为不同的开发模式设置不同的配置文件，并可以通过script快速切换不同开发模式。
   配置文件本质是js文件，使用继承以及模块化思想，将操作简化。
   * webpack --help 能够快速查看一些实用功能。
   * script中 build一般为生产，start一般为开发

----------------------------------------------------------------
### v2
1. 用webpack加载sass   使用webpack sass loader 
   * dart-sass
2. 同理可以同webpack加载 less 与 stylus
3. 使用webpack引入图片    使用file-loader 可以加载任意文件   转换为路径
4. !关于懒加载 import() 面试点    promise掌握
5. 使用webpack一键将网页部署至github  或  gitee
   * 一般地，将网页部署至github 可以发布dist目录 配合github pages；也可以新建gh-pages分支存放dist目录中的内容最为发布项。