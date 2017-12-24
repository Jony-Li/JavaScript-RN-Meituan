/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import HomeDetail from './HomeDetail';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

var {width} = Dimensions.get('window');

class MiddleCommonView extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:'',
            url:'',
        }
    }

    render() {
        var color = this.props.titleColor;
        var url = this.props.url;
        return (
            <TouchableOpacity onPress={()=>{this.loadUrlWebsite(url)}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View>
                        <Text style={{color:color}}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    {/*右边*/}
                    <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43,resizeMode:'contain'}}/>
                </View>
            </TouchableOpacity>
        );
    }

    //加载详细界面
    loadUrlWebsite(url){
        this.props.navigator.push({
            title:'详情界面',
            component:HomeDetail,//需要传递的组件
            url:url,//传递属性
        });
    }

    pushToDetail(){
        this.props.navigator.push({
            title:'详情界面',
            component:HomeDetail,//需要传递的组件
        });
    }
}

//输出组件
export {MiddleCommonView as default}

const styles = StyleSheet.create({
    subTitleStyle:{
        color:'gray',
    },

    titleStyle:{
        //color:this.props.titleColor,
        fontSize:25,
        fontWeight:'bold',
    },
    container: {
        flexDirection:'row',
        justifyContent: 'space-around',//设置主轴布局
        alignItems: 'center',//侧轴垂直居中
        backgroundColor: 'white',
        width:width*0.5 -1,
        height:59,
        marginBottom:1,
        marginRight:1,
        //borderBottomColor:'#dddddd',
        //borderBottomWidth:0.6,
    },
});
