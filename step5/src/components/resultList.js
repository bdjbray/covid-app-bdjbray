import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';

import ResultsDetail from './resultsDetail'



const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => result.Country}
                renderItem={({ item }) => {
                    return (
                        <ResultsDetail
                            result={item}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 15,
       
    },
    text: {
        fontSize: 12,
        marginLeft: 15,
    },
    container: {
        marginBottom: 10,

    }
});

export default withNavigation(ResultsList);
