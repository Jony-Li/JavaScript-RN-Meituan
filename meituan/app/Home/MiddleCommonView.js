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
    TouchableOpacity,
} from 'react-native';

var {width} = Dimensions.get('window');

class MiddleCommonView extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:'',
        }
    }



    render() {
        return (
            <TouchableOpacity onPress={()=>{alert("点击了")}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View>
                        <Text>{this.props.title}</Text>
                        <Text>{this.props.subTitle}</Text>
                    </View>
                    {/*右边*/}
                    <Image source={{uri:this.props.rightIcon}} style={{width:64,height:40}}/>
                </View>
            </TouchableOpacity>
        );
    }
}

//输出组件
export {MiddleCommonView as default}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white',
        width:width*0.5 -1,
        height:60,
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.6,
    },
});
