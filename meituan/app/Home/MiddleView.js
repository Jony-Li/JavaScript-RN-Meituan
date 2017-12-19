/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MiddleCommonView from './MiddleCommonView';
import TopMiddleData from '../../LocalData/TopMiddleLeft.json';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

class MiddleView extends Component {
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
    renderLeftView(){

    }

    renderRightView(){
        //定义组件数组
        var itemArr = [];
        var rightData = TopMiddleData.dataRight;
        for(var i=0;i<rightData.length;i++){
            var data= rightData[i];
            itemArr.push(
                <MiddleCommonView key={i} title={data.title} subTitle={data.subTitle} rightIcon={data.rightImage} titleColor={data.titleColor}/>
            );
        }
        return itemArr;
    }
}

//输出组件
export {MiddleView as default}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:16,
    }
});
