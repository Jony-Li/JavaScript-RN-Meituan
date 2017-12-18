/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MiddleData from './MiddleData.json';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

class MineMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItems()}
            </View>
        );
    }

    renderAllItems(){
        //定义组件数组
        var itemArr = [];
        for (var i=0;i<MiddleData.length;i++){
            //
            var data = MiddleData[i];
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}/>
            );
        }
        return itemArr;
    }
}

class InnerView extends  Component {
    constructor(props){
        super(props);
        this.state = {
            iconName:'',
            title:'',
        }
    }
    render() {
        return(
            <TouchableOpacity  activeOpacity={0.2} onPress={()=>{alert("点击了")}}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri:this.props.iconName}} style={{width:30,height:20}}/>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

//输出组件
export {MineMiddleView as default}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        height:75
    },
    innerViewStyle:{
        width:70,
        height:70,
        //水平和垂直居中
        justifyContent:'center',
        alignItems:'center',
    }
});
