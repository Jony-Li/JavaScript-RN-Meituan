/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TopListView from './TopListView';
import TopMenu from '../../LocalData/TopMenu.json';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ListView,
    Dimensions
} from 'react-native';

var {width,height} = Dimensions.get('window');

class TopView extends Component {

    constructor(props){
        super(props);
        this.state={
            activePage:0,
        }
    }



    render() {
        return (
            <View style={styles.container}>
                {/*--内容部分--*/}
                <ScrollView
                    onMomentumScrollEnd={this.onScrollAnimationEnd.bind(this)}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    pagingEnabled={true} >
                    {this.renderScrollViewItem()}
                </ScrollView>
                {/*--页码部分--*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    onScrollAnimationEnd(e){
        //计算当前页码
        var currentPage= Math.floor((e.nativeEvent.contentOffset.x +10) / width);
        //alert(currentPage);
        //更新状态机
        this.setState({
            activePage:currentPage,
        });
    }

    renderIndicator(){
        //指示器数组
        var indicatorArr = [],style;
        //遍历创建组件
        for(var i=0;i<2;i++){
            // 设置圆点的样式
            style = (i===this.state.activePage) ? {color:'orange'}:{color:'gray'};
            indicatorArr.push(
                <View key={i}>
                    <Text style={[{fontSize:25},style]}>&bull;</Text>
                </View>
            );
        }
        return indicatorArr;
    }

    renderScrollViewItem(){
        //组件数组
        var itemArr = [];
        //颜色数组  ----数据数组
        var colorArr = ['red','green'];
        // 数据数组
        var dataArray = TopMenu.data;

        {/*<View key={i} style={{backgroundColor:colorArr[i],height:120,width:width}}>
                    <Text>{i}</Text>
                </View>*/}
        for (var i=0; i<dataArray.length;i++){
            itemArr.push(
                <TopListView key={i}  dataArray={dataArray[i]}/>
            );
        }
        return itemArr;
    }
}

//输出组件
export {TopView as default}

const styles = StyleSheet.create({
    indicatorViewStyle:{
        flexDirection:'row',
        justifyContent:'center',//水平居中
    },
    container: {
        backgroundColor:'white'
    },
});
