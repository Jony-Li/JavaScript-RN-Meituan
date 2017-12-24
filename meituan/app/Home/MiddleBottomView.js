/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import MiddleCommonView from './MiddleCommonView';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import MiddleBottomData from '../../LocalData/MiddleBottomData.json';

class MiddleBottomView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                {/*上半部分*/}
                {this.renderTopItem()}
                {/*下半部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    }

    //上半部分组件
    renderTopItem(){
        return(
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.topViewStyle}>
                    <View>
                        <Text style={{fontSize:28,color:'#FB7F66',fontWeight:'bold'}}>最高立减200元</Text>
                        <Text style={{color:'grey'}}>新用户     注册专享</Text>
                    </View>
                    <Image source={{uri: 'nsj'}} style={{width:120,height:59,resizeMode:'contain'}}/>
                </View>
            </TouchableOpacity>
        )
    }

    //下半部分的子组件
    renderBottomItem() {
        //获取组件数据
        var dataArr = [];
        var originData = MiddleBottomData.data;

        for (var i = 0; i < originData.length; i++) {
            var data = originData[i];
            dataArr.push(
                <MiddleCommonView key={i} title={data.maintitle} subTitle={data.deputytitle}
                                  rightIcon={this.dealWithImgUrl(data.imageurl)}
                                  titleColor={data.typeface_color}
                                  navigator={this.props.navigator}
                                  url={this.switchToUrl(data.tplurl)}/>
            );
        }
        return dataArr;
    }

    //url 转换
    switchToUrl(url) {
        if (url === undefined) {
            return;
        } else {
            return url.replace('imeituan://www.meituan.com/web?url=', '');
        }
    }

    //图像大小尺寸由客户端决定，根据客户端指定的大小返回对应图片的大小 提高性能，把计算放在服务端
    dealWithImgUrl(url) {
        if (url.search('w.h') === -1) {
            return url;//返回正常的url
        } else {
            return url.replace('w.h', '120.90');
        }

    }
}

//输出组件
export {MiddleBottomView as default}

const styles = StyleSheet.create({
    bottomViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    topViewStyle: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:1,
        backgroundColor:'white',
    },
    container: {
        //flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 12,
    }
});
