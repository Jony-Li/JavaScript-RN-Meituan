/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import CommonCell from './CommonCell';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* 导航条*/}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:16}}>
                        <CommonCell title='扫一扫'/>
                    </View>
                    <View style={{marginTop:16}}>
                        <CommonCell title='省流量模式' isSwitch={true}/>
                        <CommonCell title='消息提醒'/>
                        <CommonCell title='邀请好友'/>
                        <CommonCell title='清空缓存' rightTitle='1.5M'/>
                    </View>
                    <View style={{marginTop:16}}>
                        <CommonCell title='意见反馈'/>
                        <CommonCell title='问卷调查'/>
                        <CommonCell title='支付帮助'/>
                        <CommonCell title='网络诊断'/>
                        <CommonCell title='关于美团'/>
                        <CommonCell title='我要应聘'/>
                    </View>
                    <View style={{marginTop:16}}>
                        <CommonCell title='精品应用'/>
                    </View>
                </ScrollView>

            </View>
        );
    }

    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                {/*--左边--*/}
                {/*--中间--*/}
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>更多</Text>
                {/*--右边--*/}
                <TouchableOpacity onPress={()=>{alert('点击了')}} style={styles.rightViewStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        );
    }

}

//输出组件
export {More as default}

const styles = StyleSheet.create({
    navOutViewStyle:{
        flexDirection:'row',//设置主轴方向 横向
        justifyContent:'center',//设置主轴方向的对其方式 居中
        alignItems:'center',//设置侧轴的对齐方式  居中
        height:54,
        backgroundColor:'rgba(253,75,31,1.0)',

    },

    rightViewStyle:{
        //绝对定位
        position:'absolute',
        right:10,

    },

    navImageStyle:{
        width:Platform.OS === 'ios'?28 : 25,
        height:Platform.OS === 'ios'?28 : 25,

    },
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        flexDirection:'row',
    },
});
