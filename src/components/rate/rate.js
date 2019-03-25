import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

const rateList = props => (
    <View style={styles.container}>
        <AwesomeButton
            width={70}
            height={35}
            backgroundColor='#ffb54f'
            onPress={props.press}
        >
            <Text>{props.name}</Text>
        </AwesomeButton>
        <Text style={styles.currencyRange}>{props.rate}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginRight: 15,
    },
    currencyRange: {
        fontSize: 20,
        color: '#ffb54f',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 0 },
        textShadowRadius: 1
    }
})

export default rateList