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
        }
    }

    render() {
        var color = this.props.titleColor;
        return (
            <TouchableOpacity onPress={()=>{alert("点击了")}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View>
                        <Text style={{color:color}}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    {/*右边*/}
                    <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43}}/>
                </View>
            </TouchableOpacity>
        );
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
        //borderBottomColor:'#dddddd',
        //borderBottomWidth:0.6,
    },
});
