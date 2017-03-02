### 使用react-native仿拉钩手机APP
暂时适配ios

### 运行
`
$ git clone https://github.com/myTurn2015/react-native-demo.git
$ cd react-native-demo
$ npm install
`
项目中使用了`react-native-vector-icons`,来提供图标,所以需要额外安装一些依赖

`
$ npm install -g rnpm
$ rnpm link
`
这样就可以在项目中使用`react-native-vector-icons`的图标.
需要在项目中引用`import Icon from 'react-native-vector-icons/FontAwesome';`

mac用户需要安装xcode

`
$ react-native run-ios
`
