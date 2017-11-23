import React, { Component } from 'react';

import {
    View,
    Pano,
    Text,
    AppRegistry,
    asset,
    StyleSheet

} from 'react-vr';


class WorldTour extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false
        }
    }

    toggleMenu = () => { this.setState({showMenu: !this.state.showMenu})};

    render() {
        return (
            <View>
                <Pano source={asset('starry-sky.jpg')}/>
                <View
                    style={styles.menuButton}
                    onEnter = {() => this.toggleMenu()}>
                    <Text style={styles.menuButtonText}>
                        {this.state.showMenu ? 'Close Menu' : 'Open Menu'}
                    </Text>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    menu: {
        width: 5,
        height: 1.25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        transform: [
            {translate: [-2, 0, -7.5]}
        ]
    },
    menuButton: {
        backgroundColor: '#fff',
        borderRadius: 0.25,
        width: 0.5,
        height: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.01,
        transform: [
            {translate: [-2, 0, -5]}
        ]
    },
    menuButtonText: {
        textAlign: 'center',
        fontSize: 0.15,
        color: '#000'
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 1,
        height: 1,
        borderRadius: 0.5,
        borderWidth: 0.02,
        backgroundColor: '#fff'
    },
    menuItemText: {
        fontSize: 0.2,
        textAlign: 'center',
        color: '#000'
    }
});

AppRegistry.registerComponent('WorldTour', () => WorldTour);
