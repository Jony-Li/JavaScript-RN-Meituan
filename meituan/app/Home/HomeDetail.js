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
    TouchableOpacity
} from 'react-native';

class HomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.popupToHome()}}>
                <Text style={styles.welcome}>
                    测试跳转
                </Text>
                </TouchableOpacity>
            </View>
        );
    }

    //回退到主界面
    popupToHome(){
        this.props.navigator.pop();
    }
}

//输出组件
export {HomeDetail as default}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        flexDirection:'row',
    },
});
