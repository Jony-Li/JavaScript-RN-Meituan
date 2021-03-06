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
    View
} from 'react-native';

class Movie extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    电影
                </Text>
            </View>
        );
    }
}

//输出组件
export {Movie as default}

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
