/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import MiddleCommonView from './MiddleCommonView';
import TopMiddleData from '../../LocalData/TopMiddleLeft.json';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');

class MiddleView extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    }

    renderLeftView() {
        //获取左边View显示的数据
        var leftData = TopMiddleData.dataLeft;
        return (
            <TouchableOpacity onPress={() => {
                alert("点击了")
            }}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: leftData[0].img1}} style={styles.leftImage1ViewStyle}/>
                    <Image source={{uri: leftData[0].img2}} style={styles.leftImage2ViewStyle}/>
                    <Text style={{color: 'grey'}}>{leftData[0].title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#32B9AA', marginRight: 5}}>{leftData[0].price}</Text>
                        <Text style={{color: 'orange', backgroundColor: 'yellow'}}>{leftData[0].sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView() {
        //定义组件数组
        var itemArr = [];
        var rightData = TopMiddleData.dataRight;
        for (var i = 0; i < rightData.length; i++) {
            var data = rightData[i];
            itemArr.push(
                <MiddleCommonView key={i} title={data.title}
                                  subTitle={data.subTitle}
                                  navigator={this.props.navigator}
                                  titleColor={data.titleColor}
                                  rightIcon={data.rightImage}/>
            );
        }
        return itemArr;
    }
}

//输出组件
export {MiddleView as default}

const styles = StyleSheet.create({
    leftViewStyle: {
        //水平和垂直居中
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.5,
        height: 119,
        backgroundColor: 'white',
        marginRight: 1,
        //borderRightWidth:1,
        //borderBottomColor:'#dddddd',
    },
    leftImage1ViewStyle: {
        width: 120,
        height: 30,
        //设置图片内容模式
        resizeMode: 'contain'
    },
    leftImage2ViewStyle: {
        width: 120,
        height: 30,
        //设置图片内容模式
        resizeMode: 'contain'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //alignItems: 'center',
        backgroundColor: '#dddddd',
        marginTop: 12,
    }
});
