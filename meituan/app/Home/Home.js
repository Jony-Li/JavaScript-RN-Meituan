/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import HomeDetail from './HomeDetail';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
                <Text style={styles.welcome}>
                    首页
                </Text>
                </TouchableOpacity>

            </View>
        );
    }

    //跳转二级界面
    pushToDetail(){
        this.props.navigator.push({
            title:'详情界面',
            component:HomeDetail,//需要传递的组件
        });
    }
}

//输出组件
//export {Home as default}

export {Home as default}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        flexDirection:'row',
    },
});
