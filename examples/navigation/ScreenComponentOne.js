import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class ScreenComponentOne extends React.Component {
    static navigationOptions = {
        headerTitle: 'Screen One',
        headerStyle: {
            backgroundColor: "blue"
        }
      }
    render() {
        return (
            <View style={styles.container}>
                <Text>React Component One</Text>
                <Button title="Go to component Two" onPress={() => this.props.navigation.navigate('RouteNameTwo')}/>
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