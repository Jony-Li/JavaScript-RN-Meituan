/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import BottomCommonCell from './BottomCommonCell';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

var {width} = Dimensions.get('window');

class ShopCenter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {/*上面部分*/}
                <BottomCommonCell leftIconName='gw' leftTitle='购物中心' rightTitle={ShopCenterData.tips}/>
                {/*下面部分*/}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollViewStyle}>
                    {this.renderAllItems()}
                </ScrollView>
            </View>
        );
    }

    renderAllItems(){
        //定义组件数组
        var itemArr = [];
        //获得JSON数据
        var shopData = ShopCenterData.data;
        for (var i = 0; i < shopData.length; i++) {
            var shop = shopData[i];
            itemArr.push(
                <ShopCenterItem key={i}
                                iconName={shop.img}
                                discountStore={shop.showtext.text}
                                storeName={shop.name}
                                detailurl={shop.detailurl}/>
            )
        }
        return itemArr;
    }
}

import ShopCenterData from '../../../LocalData/ShopCenterData.json';


class ShopCenterItem extends Component{
    constructor(props){
        super(props);
        this.state={
            iconName:'',
            discountStore:'',
            storeName:'',
            detailurl:''
        }
    }

    render(){
        return(
            <TouchableOpacity onPress={()=>{alert(this.props.detailurl)}}>
                <View style={styles.shopCenterItemStyle}>
                    <Image source={{uri:this.props.iconName}} style={styles.iconStyle}/>
                    <Text style={styles.discountTextStyle}>{this.props.discountStore}</Text>
                    <Text style={styles.storeNameStyle}>{this.props.storeName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

//输出组件
export {ShopCenter as default}

const styles = StyleSheet.create({
    storeNameStyle:{
        textAlign:'center',
        marginTop:5,
        fontWeight:'bold',
        fontSize:12,
    },
    discountTextStyle:{
        position:'absolute',
        //left:8,
        bottom:30,
        backgroundColor:'#FFA11B',
        color:'white',
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
    },
    scrollViewStyle:{
        backgroundColor:'white',
        padding:10,
    },
    shopCenterItemStyle:{
        margin:8,


    },
    iconStyle:{
        width:120,
        height:100,
        borderRadius:8,

    },
    container: {
        marginTop:15,
        width:width,
    }
});
