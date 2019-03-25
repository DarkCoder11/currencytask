import React, { PureComponent } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { connect } from "react-redux";
import getCurrency from '../../store/actions/getCurrency/getCurrency';
import getExchange from '../../store/actions/getExchange/getExchange';

import Rate from '../../components/rate/rate';
import AwesomeButton from "react-native-really-awesome-button";
import Spinner from '../../components/UI/Spinner/Spinner';

class Convert extends PureComponent {

    state = {
        from: '',
        to: ''
    }

    componentDidMount() {
        this.props.navigator.setStyle({
            navBarCustomView: 'TopBarScreen',
        })
        this.props.getCurrency()
    };

    fromToChangeHandler = (name, value) => {
        this.setState({
            [name]: value
        })
    };

    render() {
        const { rates, getExchange, exchange } = this.props;
        const { from, to } = this.state;
        if (!rates.length) {
            return (
                <View style={styles.spinnerContainer}>
                    <Spinner />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.selectedRateContainer}>
                    <Text style={styles.selectedRates}>{from}</Text>
                    <AwesomeButton
                        disabled={!(from && to)}
                        backgroundColor="#0e7a1d"
                        onPress={() => getExchange(from, to)}
                    >
                        Convert
                    </AwesomeButton>
                    <Text style={styles.selectedRates}>{to}</Text>
                </View>
                <View>
                    <Text style={styles.convertResult}>
                        {exchange}
                    </Text>
                </View>
                <FlatList
                    data={rates}
                    keyExtractor={i => i.name}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.rateContainer}>
                            <View>
                                <Rate name={item.name} press={() => this.fromToChangeHandler('from', item.name)} />
                            </View>
                            <View>
                                <Rate name={item.name} press={() => this.fromToChangeHandler('to', item.name)} />
                            </View>
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
        rates: state.currency.rates,
        exchange: state.exchange.exchange
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#f7f7f7'
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    selectedRateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rateContainer: {
        flex: 1,
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    convertResult: {
        fontSize: 30,
        color: '#ffb54f',
        textAlign: 'center',
        marginTop: 10,
        height: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 3
    },
    selectedRates: {
        width: 60,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0e7a1d',
        textAlign: 'center'
    }
})

export default connect(mapStateToProps, { getCurrency, getExchange })(Convert)
