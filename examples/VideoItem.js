import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default VideoItem = ({ ...props }) => {
    return (
        <View key={props.key} style={styles.container}>
            <Image style={styles.image} source={{ uri: props.video.snippet.thumbnails.medium.url }} />
            <View style={styles.descContainer}>
                <Image style={styles.profileImage} source={{ uri: 'https://randomuser.me/api/portraits/men/0.jpg' }} />
                <View style={styles.videoStatsContainer}>
                    <Text numberOfLines={2} style={styles.videoTitle}>{props.video.snippet.title}</Text>
                    <Text style={styles.videoStats}>{props.video.snippet.channelTitle + ' . ' + _nFormatter(props.video.statistics.viewCount, 1)}</Text>
                </View>
                <TouchableOpacity>
                    <Icons name="more-vert" size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

_nFormatter = (num, digits) => {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + " Views .3 months ago";
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        elevation: 2,
        borderColor: '#e5e5e5',
    },
    image: {
        height: 200,
    },
    descContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    videoStatsContainer: {
        paddingHorizontal: 10,
        flex: 1,
    },
    videoTitle: {
        fontSize: 15,
        color: '#3c3c3c',
    },
    videoStats: {
        fontSize: 15,
        paddingTop: 3,
    },
    icons: {
        color: '#999999',
    }
})