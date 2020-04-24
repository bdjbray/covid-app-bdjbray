import React from 'react';
import { View, Text, StyleSheet } from 'react-native';





function parseJSON(inputData, fieldName, resultData) {
    let countryData = 0
    try {
        temp = inputData.filter( (obj) => {
            return ((obj.country === resultData))
        })
        
        countryData = temp[0][fieldName]
    } catch(error) {
        countryData = 'N/A'
    }
    return countryData
}

const ResultsDetail = ({ result }) => {



    return (
        <View style={styles.container}>
            {/*
            
            */}
            <Text style={styles.name}>
                {result.Country} 
            </Text>
            <Text style={styles.rating}>
                New confirmed: {result.NewConfirmed}{"\n"}
                Total Confirmed: {result.TotalConfirmed}{"\n"}
                New Deaths: {result.NewDeaths}{"\n"}
                Total Deaths: {result.TotalDeaths}{"\n"}
                New Recovered: {result.NewRecovered}{"\n"}
                Total Recovered: {result.TotalRecovered}{"\n"}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        color:'white'
    },
    
    name: {
        padding: 1,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
    },
    rating: {
        marginLeft: 10
    }
});

export default ResultsDetail;
