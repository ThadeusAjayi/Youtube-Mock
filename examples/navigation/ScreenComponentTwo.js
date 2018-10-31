import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class ScreenComponentTwo extends React.Component {
    static navigationOptions = {
        headerTitle: 'Screen Two',
        headerStyle: {
            backgroundColor: "green"
        }
      }
    render() {
        return (
            <View style={styles.container}>
                <Text>React Component Two</Text>
                <Button title="Go to component One" onPress={() => this.props.navigation.navigate('RouteNameOne')}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})