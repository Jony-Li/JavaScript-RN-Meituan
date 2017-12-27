/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    WebView,
    Image,
    Dimensions
} from 'react-native';

var {width,height} = Dimensions.get('window');

class HomeDetail extends Component {
    constructor(props){
        super(props);
        //alert(this.props.url);
        this.state={
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                {/*页面内容*/}
                <WebView
                    style={styles.webView}
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    //onNavigationStateChange={this.onNavigationStateChange}
                    //onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />
            </View>
        );
    }

    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                {/*--左边--*/}
                <TouchableOpacity onPress={()=>{this.popupToHome()}} style={styles.leftViewStyle}>
                    <Image source={{uri:'navigationbar_arrow_up'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
                {/*--中间--*/}
                <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>活动详情</Text>
                {/*--右边--*/}
            </View>
        );
    }

    //回退到主界面
    popupToHome(){
        this.props.navigator.pop();
    }
}

//输出组件
export {HomeDetail as default}

const styles = StyleSheet.create({
    navOutViewStyle:{
        flexDirection:'row',//设置主轴方向 横向
        justifyContent:'center',//设置主轴方向的对其方式 居中
        alignItems:'center',//设置侧轴的对齐方式  居中
        width:width,
        height:54,
        backgroundColor:'rgba(253,75,31,1.0)',

    },
    leftViewStyle:{
        //绝对定位
        position:'absolute',
        left:10,
    },
    rightViewStyle:{
        //绝对定位
        position:'absolute',
        right:10,
    },
    navImageStyle:{
        width:Platform.OS === 'ios'?11 : 11,
        height:Platform.OS === 'ios'?20 : 20,

    },
    webView: {
        //flex:1,
        width:width,
        height:height,
        //paddingTop:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddddd',
    }
});
