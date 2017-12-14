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
    Image
} from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    render() {
        return (
            <TabNavigator tabBarStyle={styles.tabBar}>
                <TabNavigator.Item selected={this.state.selectedTab === 'home'}
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
                </TabNavigator.Item>
                <TabNavigator.Item selected={this.state.selectedTab === 'vendor'}
                                   onPress={() => {
                                       this.setState({
                                           selectedTab: 'vendor'
                                       })
                                   }}
                                   title='商家'
                                   titleStyle={styles.tabText}
                                   selectedTitleStyle={styles.selectedTabText}
                                   renderIcon={() => <Image style={styles.tabIcon}
                                                            source={{uri: 'icon_tabbar_merchant_normal'}}/>}
                                   renderSelectedIcon={() => <Image style={styles.tabIcon}
                                                                    source={{uri: 'icon_tabbar_merchant_selected'}}/>}>
                    <Navigator
                        initialRoute={{name: "商家", component: Vendor}}
                        configureScene={(route) => {
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route} navigator={navigator} {...route.passProps} />
                        }}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item selected={this.state.selectedTab === 'mine'}
                                   onPress={() => {
                                       this.setState({
                                           selectedTab: 'mine'
                                       })
                                   }}
                                   title='我的'
                                   titleStyle={styles.tabText}
                                   selectedTitleStyle={styles.selectedTabText}
                                   renderIcon={() => <Image style={styles.tabIcon}
                                                            source={{uri: 'icon_tabbar_mine'}}/>}
                                   renderSelectedIcon={() => <Image style={styles.tabIcon}
                                                                    source={{uri: 'icon_tabbar_mine_selected'}}/>}>
                    <Navigator
                        initialRoute={{name: "我的", component: Mine}}
                        configureScene={(route) => {
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route} navigator={navigator} {...route.passProps} />
                        }}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item selected={this.state.selectedTab === 'more'}
                                   onPress={() => {
                                       this.setState({
                                           selectedTab: 'more'
                                       })
                                   }}
                                   title='更多'
                                   titleStyle={styles.tabText}
                                   selectedTitleStyle={styles.selectedTabText}
                                   renderIcon={() => <Image style={styles.tabIcon}
                                                            source={{uri: 'icon_tabbar_misc'}}/>}
                                   renderSelectedIcon={() => <Image style={styles.tabIcon}
                                                                    source={{uri: 'icon_tabbar_misc_selected'}}/>}>
                    <Navigator
                        initialRoute={{name: "更多", component: More}}
                        configureScene={(route) => {
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route} navigator={navigator} {...route.passProps} />
                        }}
                    />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

//输出组件
export {Main as default}

const styles = StyleSheet.create({

    tabIcon: {
        width: 30,
        height: 30,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        flexDirection: 'row',
    },
});
