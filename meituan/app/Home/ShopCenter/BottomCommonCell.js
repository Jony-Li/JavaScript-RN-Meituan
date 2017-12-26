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

} from 'react-native';

class BottomCommonCell extends Component {

    constructor(props){
        super(props);
        this.state={
            leftIconName:'',
            leftTitle:'',
            rightTitle:'',
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:this.props.leftIconName}} style={styles.iconStyle}/>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text style={{fontSize:15,marginLeft:5,color:'grey'}}>{this.props.rightTitle}</Text>
                    <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13}}/>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

//输出组件
export {BottomCommonCell as default}

const styles = StyleSheet.create({
    iconStyle:{
        width:23,
        height:23,
        marginRight:5,
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,

    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:8,

    },
    container: {
        flexDirection:'row',
        justifyContent: 'space-between',//两端对齐
        //alignItems: 'center',
        backgroundColor: 'white',
        height:44,
        //设置下边框
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',
    }
});
