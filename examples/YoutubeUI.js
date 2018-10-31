import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import { Constants } from 'expo';
import Icons from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './VideoItem';
import data from './data.json';

export default class Youtube extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.navBar}>
                    <Image source={require('./youtube.png')} style={styles.image} />
                    <View style={styles.icons}>
                        <TouchableOpacity>
                            <Icons style={styles.iconItem} name='search' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icons style={styles.iconItem} name='account-circle' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList 
                style={styles.body}
                data={data.items}
                renderItem={(video) => <VideoItem video={video.item} />}
                keyExtractor={(item) => item.id} />

                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem}>
                        <Icons name="home" size={25} />
                        <Text style={styles.tabNavTitle}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Icons name="whatshot" size={25} />
                        <Text style={styles.tabNavTitle}>Trending</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Icons name="subscriptions" size={25} />
                        <Text style={styles.tabNavTitle}>Subscriptions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Icons name="folder" size={25} />
                        <Text style={styles.tabNavTitle}>Library</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    navBar: {
        height: 55,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        height: 22,
        width: 98,
    },
    icons: {
        flexDirection: 'row',
    },
    iconItem: {
        marginLeft: 25,
    },
    body: {
        flex: 1,
    },
    bottomNav: {
        height: 60,
        backgroundColor: 'white',
        borderColor: '#E5E5E5',
        borderTopWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navItem: {
        alignItems: 'center',
    },
    tabNavTitle: {
        fontSize: 11,
        color: '#3c3c3c',
        marginTop: 4,
    }
})