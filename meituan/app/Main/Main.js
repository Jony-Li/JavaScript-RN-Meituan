/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';
import Home from '../Home/Home';
import Mine from '../Mine/Mine';
import More from '../More/More';
import Vendor from '../Vendor/Vendor';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }
    //React 在ES6中去掉了getInitialState 函数，目前建议直接在constructor中初始化
    getInitialState(){}

    render() {
        return (
            <TabNavigator tabBarStyle={styles.tabBar}>
                {/*--首页--*/}
                {/*<TabNavigator.Item selected={this.state.selectedTab === 'home'}
                                   onPress={() => {
                                       this.setState({
                                           selectedTab: 'home'
                                       })
                                   }}
                                   title='首页'
                                   titleStyle={styles.tabText}
                                   selectedTitleStyle={styles.selectedTabText}
                                   renderIcon={() => <Image style={styles.tabIcon}
                                                            source={{uri: 'icon_tabbar_homepage'}}/>}
                                   renderSelectedIcon={() => <Image style={styles.tabIcon}
                                                                    source={{uri: 'icon_tabbar_homepage_selected'}}/>}>
                    <Navigator
                        initialRoute={{name: "首页", component: Home}}
                        configureScene={(route) => {
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route} navigator={navigator} {...route.passProps} />
                        }}
                    />
                </TabNavigator.Item>*/}
                {this.renderTabNavigator('首页','home','icon_tabbar_homepage','icon_tabbar_homepage_selected','首页',Home)}
                {/*--商家--*/}
                {this.renderTabNavigator('商家','vendor','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','商家',Vendor)}
                {/*--我的--*/}
                {this.renderTabNavigator('我的','mine','icon_tabbar_mine','icon_tabbar_mine_selected','我的',Mine,'10')}
                {/*--更多--*/}
                {this.renderTabNavigator('更多','more','icon_tabbar_misc','icon_tabbar_misc_selected','更多',More)}
            </TabNavigator>
        );
    }

        //封装TabNavigator
        renderTabNavigator(title,selectedTab,iconName,selectedIconName,componentTitle,component,badgeText){
        return(
            <TabNavigator.Item selected={this.state.selectedTab === selectedTab}
                               onPress={() => {
                                   this.setState({
                                       selectedTab: selectedTab
                                   })
                               }}
                               title={title}//传递变量必须加{}
                               titleStyle={styles.tabText}
                               selectedTitleStyle={styles.selectedTabText}
                               badgeText={badgeText}
                               renderIcon={() => <Image style={styles.tabIcon}
                                                        source={{uri: iconName}}/>}
                               renderSelectedIcon={() => <Image style={styles.tabIcon}
                                                                source={{uri: selectedIconName}}/>}>
                <Navigator
                    initialRoute={{name: componentTitle, component: component}}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route} navigator={navigator} {...route.passProps} />
                    }}
                />
            </TabNavigator.Item>
        );
    }
}

//输出组件
export {Main as default}

const styles = StyleSheet.create({
    selectedTabText:{
        color:'orange'
    },
    tabText:{

    },
    tabIcon: {
        width:Platform.OS === 'ios' ? 25: 30,
        height:Platform.OS === 'ios' ? 25: 30,
    },
    tabBar:{
        height:55,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        flexDirection: 'row',
    },
});
