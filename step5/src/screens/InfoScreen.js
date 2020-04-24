import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import covidApi from "../api/Api";
import useResults from "../hooks/useResults";
import ResultsList from "../components/resultList";



const SearchScreen = ( {navigation} ) => {
    
    const [term, setTerm] = useState("");
    [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (threshholdmin, threshholdmax) => {
        
        return results.filter((result) => {
            
            return (result.TotalConfirmed < threshholdmax && result.TotalConfirmed >= threshholdmin);
        });
    };
    const filterResultByCountry = ( countryVal ) => {
        return results.filter((result) =>  {
            return result.Country === countryVal; // Will this return null otherwise, or crash
        })[0];
    }

    let myCallback = (term) => {
        let resultByCountry = filterResultByCountry(term)
        if (resultByCountry) {
            navigation.navigate('ResultsShow', {id: null, result: filterResultByCountry(term)})
        } else {
            console.log('Add warning message')
        }
    }

    
    return (
        <>
            <ScrollView>
                
                <ResultsList
                    title="More than 10000 Confirmed"
                    results={filterResultsByPrice(10000, Infinity)}
                />
                <ResultsList
                    title="More than 1000 Confirmed"
                    results={filterResultsByPrice(1000, 5000)}
                />
                <ResultsList
                    title="Less than 1000"
                    results={filterResultsByPrice(0, 1000)}
                />
            </ScrollView>
            
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        marginLeft: 15,
    },
});

export default SearchScreen;
