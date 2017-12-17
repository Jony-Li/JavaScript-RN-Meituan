/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import CommonMyCell from './CommonMyCell';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

class Mine extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop:16}}>
                    <CommonMyCell leftIconName='draft' leftTitleName='美团钱包' rightTitleName='账户余额：￥120'/>
                    <CommonMyCell leftIconName='like' leftTitleName='抵用券' rightTitleName='0'/>
                </View>
                <View style={{marginTop:16}}>
                    <CommonMyCell leftIconName='card' leftTitleName='积分商城' rightTitleName=''/>
                </View>
                <View style={{marginTop:16}}>
                    <CommonMyCell leftIconName='new_friend' leftTitleName='今日推荐' rightIconName='me_new'/>
                </View>
                <View style={{marginTop:16}}>
                    <CommonMyCell leftIconName='pay' leftTitleName='我要合作' rightTitleName='轻松开店，招财进宝'/>
                </View>

            </View>
        );
    }
}

//输出组件
export {Mine as default}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        flexDirection:'row',
    },
});
