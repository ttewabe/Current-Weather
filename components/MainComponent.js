import React, {Component} from 'react';
import {View, Text } from 'react-native'


const refresh =() =>{
    window.location.reload();
}

function WeatherCard ({weatherData}) {
    return(
        <View>
        <Text>
        Hello Tewabe
        </Text>
        </View>
    )
}
export default WeatherCard;