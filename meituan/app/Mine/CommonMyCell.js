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
    Image,
} from 'react-native';

class CommonMyCell extends Component {

    constructor(props){
        super(props);
        this.state={
            leftIconName:'',
            leftTitleName:'',
            rightIconName:'',
            rightTitleName:'',
        }
    }


    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <View style={styles.container}>
                {/*--左边--*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIconName}} style={styles.leftImageStyle}/>
                    <Text style={styles.rightTitleStyle}>{this.props.leftTitleName}</Text>
                </View>
                {/*--右边--*/}
                <View style={styles.rightViewStyle}>
                    {this.renderSubView()}
                </View>
            </View>
            </TouchableOpacity>
        );
    }

    renderSubView(){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image source={{uri:'icon_cell_right_arrow'}} style={styles.commonCellIcon}/>
            </View>
        );
    }
    renderRightContent(){
        var rightIconName = this.props.rightIconName;
        //alert( rightIconName)
        if (typeof rightIconName === 'undefined') {
            return (
                <Text>{this.props.rightTitleName}</Text>
            );
        }else {
            return(
                <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13}}/>
            );

        }
    }
}

//输出组件
export {CommonMyCell as default}

const styles = StyleSheet.create({
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',

    },
    rightImageStyle:{
        height:30,
        width:30,

    },
    rightTitleStyle:{

    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',

    },
    leftImageStyle:{
        height:30,
        width:30,
        borderRadius:15,
        marginRight:8,
        marginLeft:8,

    },
    leftTitleStyle:{

    },
    container: {
        flexDirection:'row',//设置主轴方向——横向
        justifyContent: 'space-between',//设置主轴的对齐方式  两端对齐
        alignItems: 'center',//设置侧轴的对齐方式  垂直居中
        backgroundColor: 'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        height:44,

    },
    commonCellIcon:{
        marginRight:8,
        marginLeft:8,
        width:8,
        height:13,
    },
});
