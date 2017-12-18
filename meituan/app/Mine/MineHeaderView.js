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
    TouchableOpacity
} from 'react-native';
var {width,height} = Dimensions.get('window');

class MineHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*--HeaderView 上部分--*/}
                {this.renderTopView()}
                {/*--HeaderView 下部分--*/}
                {this.renderBottomView()}
            </View>
        );
    }

    renderBottomView(){
        return(
            <View style={{flexDirection:'row',position:'absolute',bottom:0}}>
                {this.renderBottomItem()}
            </View>
        );
    }

    renderBottomItem(){
        //定义组件数组
        var itemArr = [];
        var data = [{"number":100,"title":"美团券"},{"number":12,"title":"评价"},{"number":50,"title":"收藏"},];
        //遍历创建组件
        for(var i=0;i<data.length;i++){
            var item = data[i];
            itemArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color:'white'}}>{item.number}</Text>
                        <Text style={{color:'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return itemArr;
    }


    renderTopView(){
        return(
            <TouchableOpacity onPress={()=>{alert("点击了")}}>
                <View style={styles.topViewStyle}>
                    <Image source={{uri:'ic_account_avatar_default'}} style={styles.leftIconStyle}/>
                    <View style={styles.centerViewStyle}>
                        <Text style={{color:'white',fontSize:18,}}>个人信息</Text>
                        <Image source={{uri:'avatar_vip'}} style={{height:25,width:25}}/>
                    </View>
                    <Image source={{uri:'icon_cell_right_arrow'}} style={{
                        marginRight:8,
                        width:8,
                        height:13,}}/>
                </View>
            </TouchableOpacity>
        );
    }
}

//输出组件
export {MineHeaderView as default}

const styles = StyleSheet.create({
    bottomInnerViewStyle:{
        width:(width/3)+1,
        height:45,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        borderRightWidth:1,
        borderRightColor:'white'
    },
    leftIconStyle:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:3,
        marginLeft:8,
        borderColor:'rgba(0,0,0,0.2)'
    },
    centerViewStyle:{
        flexDirection:'row',
        width:width * 0.72,
    },
    topViewStyle:{
        marginTop:Platform.OS === 'ios'? 80: 26,
        flexDirection:'row',
        justifyContent:'space-around',//设置主轴的对齐方式
        alignItems:'center',//设置侧轴的对齐方式
    },
    container: {
        height:Platform.OS === 'ios'? 400 : 180,
        backgroundColor:'rgba(253,75,31,1.0)',
    }
});
