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
    ListView,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

var {width,height} = Dimensions.get('window');

//适配Android IOS
//全局变量
var cols = 5;
var cellWidth = Platform.OS === 'ios' ? 60 :70;
var cellMargin = (width - cellWidth*cols) / (cols +1);

class TopListView extends Component {

    constructor(props){
        super(props);
        //创建数据源
        var data = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

        this.state={
            dataSource:data.cloneWithRows(this.props.dataArray),
        }

    }


    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnable={false}
            />
        );
    }

    //具体的ListView item
    renderRow(rowData){
        //alert(rowData.title);
        return(
            <TouchableOpacity onPress={()=>{alert("点击了")}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:rowData.image}} style={{width:52,height:52}}/>
                    <Text style={{fontSize:10}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

//输出组件
export {TopListView as default}

const styles = StyleSheet.create({
    cellStyle:{
        //backgroundColor:'red',
        width:cellWidth,
        height:cellWidth,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:cellMargin,//等分剩余的空间
    },
    contentViewStyle:{
        flexDirection:'row',//设置主轴方向
        flexWrap:'wrap',//多个cell在同一行显示
        width:width,//设置ListView的宽度

    },
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
