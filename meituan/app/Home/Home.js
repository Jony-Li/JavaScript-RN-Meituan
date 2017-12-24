/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import HomeDetail from './HomeDetail';
import TopView from './TopView';
import MiddleView from  './MiddleView';
import MiddleBottomView from './MiddleBottomView';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';

var {width,height} = Dimensions.get('window');

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}
                <ScrollView>
                    {/*头部view*/}
                    <TopView/>
                    {/*中间view*/}
                    <MiddleView navigator={this.props.navigator}/>
                    {/*中间下半部分内容*/}
                    <MiddleBottomView navigator={this.props.navigator}/>

                </ScrollView>
                {/*<TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                <Text style={styles.welcome}>
                    首页
                </Text>
                </TouchableOpacity>*/}

            </View>
        );
    }

    //首页导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <Text style={{color:'white',fontSize: 15,marginLeft:8,marginRight:8}}>成都</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput placeholder="输入商家、品类、商圈"
                           underlineColorAndroid={'transparent'}
                           style={styles.navBarInputText}
                />
                {/*右边*/}
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                    <Image source={{uri:'icon_homepage_message'}} style={styles.navBarIconStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.navBarIconStyle}/>
                    </TouchableOpacity>
                </View>

            </View>

        );

    }

    //跳转二级界面
    pushToDetail(){
        this.props.navigator.push({
            title:'详情界面',
            component:HomeDetail,//需要传递的组件
        });
    }
}

//输出组件
//export {Home as default}

export {Home as default}

const styles = StyleSheet.create({
    navBarStyle:{//导航条样式
        flexDirection:'row',//设置主轴方向 横向
        justifyContent:'space-around',//设置主轴的对齐方式
        alignItems:'center',//设置侧轴方向 垂直居中
        height:54,
        backgroundColor:'rgba(253,75,31,1.0)',
    },
    navBarIconStyle:{
        width:25,
        height:25,
    },
    navBarInputText:{
        width:width*0.72,
        height:38,
        backgroundColor:'white',
        borderRadius:18,
        paddingLeft:8,//设置内左边距

    },
    container: {
        flex: 1,
        //justifyContent: 'center',//主轴对齐方式
        //alignItems: 'center',
        backgroundColor: '#dddddd',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        flexDirection:'row',
    },
});
