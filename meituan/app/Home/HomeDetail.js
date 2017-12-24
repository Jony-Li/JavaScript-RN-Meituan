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
    WebView,
    Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');

class HomeDetail extends Component {

    constructor(props){
        super(props);
        //alert(this.props.url);
        this.state={
        }
    }

    render() {
        var WEBVIEW_REF = 'webview';
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.popupToHome()}}>
                    <WebView
                        ref={WEBVIEW_REF}
                        style={styles.webView}
                        automaticallyAdjustContentInsets={true}
                        source={{uri: this.props.url}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        decelerationRate="normal"
                        //onNavigationStateChange={this.onNavigationStateChange}
                        //onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                        startInLoadingState={true}
                        scalesPageToFit={true}
                    />
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
    webView: {
        //backgroundColor: BGWASH,
        width:width,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddddd',
    }
});
