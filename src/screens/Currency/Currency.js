import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import getCurrency from '../../store/actions/getCurrency/getCurrency';
import dispatchAddFavorite from '../../store/actions/dispatchAddFavorite/dispatchAddFavorite';

import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image'


import Rate from '../../components/rate/rate';
import Spinner from '../../components/UI/Spinner/Spinner';

class Currency extends PureComponent {


    componentDidMount() {
        this.props.navigator.setStyle({
            navBarCustomView: 'TopBarScreen',
        })
        this.props.getCurrency()
    }

    render() {
        const {
            baseCurrency,
            rates,
            getCurrency,
            dispatchAddFavorite
        } = this.props;
        if (!rates.length) {
            return (
                <View style={styles.spinnerContainer}>
                    <Spinner />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text style={styles.selectedCurrency}>
                    {baseCurrency}
                </Text>
                <FlatList
                    data={rates}
                    keyExtractor={i => i.name}
                    initialNumToRender={14}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={styles.listContainer}>
                            <TouchableWithoutFeedback onPress={() => dispatchAddFavorite(index)}>
                                <View style={styles.button}>
                                    <FastImage source={require('../../assets/img/plus.png')} />
                                </View>
                            </TouchableWithoutFeedback>
                            <Rate press={() => getCurrency(item.name)} name={item.name} rate={item.rate} />
                        </View>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        baseCurrency: state.currency.baseCurrency,
        rates: state.currency.rates
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    selectedCurrency: {
        fontSize: 28,
        color: '#ffb54f',
        textAlign: 'center',
        backgroundColor: '#f4fffa',
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 3
    },
    button: {
        marginRight: 10,
        marginLeft: 15
    },
    listContainer: {
        flexDirection: 'row'
    }
})

export default connect(mapStateToProps, { getCurrency, dispatchAddFavorite })(Currency);
