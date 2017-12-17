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
    TouchableOpacity,
    Switch,
} from 'react-native';

class CommonCell extends Component {

    constructor(props){
        super(props);
        this.state = {
            title:'',//标题
            isSwitch:false,//
            isOn:false,
            rightTitle:''
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert("点击了")}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{marginLeft:8}}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }

    //Cell右边显示的内容
    renderRightView(){
        if (this.props.isSwitch){
             return (
                 <Switch value={this.state.isOn === false} onValueChange={() =>{this.setState({isOn:!this.state.isOn})}} />
             );
        }else {
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.renderRightTitle()}
                    <Image source={{uri:'icon_cell_right_arrow'}} style={styles.commonCellIcon}/>
                </View>

            );
        }
    }

    //Cell右边显示缓存
    renderRightTitle(){
        if (this.props.rightTitle !== 'undefined'){
            return(
                <Text style={{color:'grey',marginRight:3}}>{this.props.rightTitle}</Text>
            );
        }
    }
}

//输出组件
export {CommonCell as default}

const styles = StyleSheet.create({
    commonCellIcon:{
        marginRight:8,
        width:8,
        height:13,
    },
    container: {
        flexDirection:'row',//设置主轴方向 横向
        justifyContent: 'space-between',//设置主轴的对齐方式  两端对齐
        alignItems: 'center',//设置侧轴的对齐方式  垂直居中
        backgroundColor: 'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        height:44,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        flexDirection:'row',
    },
});
