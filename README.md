# JavaScript-RN-Meituan

## ReactNative环境搭建
  * #react-native init douban
  * #npm install react-native-deprecated-custom-components --save-dev 坑点
  * #npm install react-native-tab-navigator --save-dev
  * #adb reverse tcp:8081 tcp:8081
  * #react-native start

## ReactNative版本控制
  * #npm update -g react-native-cli //更新本地的React Native的版本
  * #npm info react-native //查询react-native的npm包最新版本
  * #npm install --save react-native@0.18 //升级或者降级npm包的版本
  * #react-native upgrade//更新项目templates文件（可选）

## ReactNative 知识点总结

* **参数传递方式:**1.组件从上到下方式传递(将navigator传递给子组件)；2.回调函数方式传递（将参数传递给父类容器组件）
```jsx
    MiddleView navigator={this.props.navigator}/>

```
```jsx
    itemArr.push(
        <MiddleCommonView key={i}
          title={data.title}
          subTitle={data.subTitle}
          navigator={this.props.navigator}
          titleColor={data.titleColor}
          rightIcon={data.rightImage}/>
        );
```
* **性能优化:**1.可以将需要图片尺寸的大小(w.h)放到url中，将数据处理放在后台服务器，提升客户端的相应速度。

```JSX
    http://p0.meituan.net/w.h/groupop/9aa35eed64db45aa33f9e74726c59d938450.png
    //例如40*40
    http://p0.meituan.net/40.40/groupop/9aa35eed64db45aa33f9e74726c59d938450.png
```
* **用户体验:**美团APP很多界面(例如：商家)都是web网页，将逻辑处理交给后台服务器，客户端负责UI显示，提升响应速度和用户体验。
```JSX
    <WebView
        style={styles.webView}
        automaticallyAdjustContentInsets={true}
        source={{uri: 'http://cd.meituan.com/s/%E5%95%86%E5%AE%B6/'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        //onNavigationStateChange={this.onNavigationStateChange}
        //onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
        startInLoadingState={true}
        scalesPageToFit={true}
    />
```

### Demo演示
![image](https://github.com/Jony-Li/JavaScript-RN-Meituan/blob/master/meituan/JavaScript-RN-Meituan.gif)