import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, RefreshControl, Text, View, ScrollView, Image, FlatList } from 'react-native';
import CountryButton from '../components/CountryButton'

import { api } from '../services/api';

export default function App() {
    const [casesByCountry, setCasesByCountry] = useState({ countries_stat: [] })
    const [refreshing, setRefreshing] = useState(false);
    const [autoRefresh, setAutoRefresh] = useState()

    async function loadData() {
        if (autoRefresh)
            setAutoRefresh(clearTimeout(autoRefresh))

        setRefreshing(true);

    
    const { data: country } = await api().get('coronavirus/cases_by_country.php')
    
    setCasesByCountry(country)
    setRefreshing(false)

        if (!autoRefresh)
            setAutoRefresh(setTimeout(() => loadData(), 60000))

    }

    useEffect(() => {
        loadData()
    }, [])



    const onRefresh = useCallback(() => {
        loadData()
    }, [refreshing]);

    return(
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <FlatList
                    data={casesByCountry.countries_stat}
                    keyExtractor={country => country.country_name}
                    renderItem={({ item }) => <CountryButton item={item} />}
            />

        </ScrollView>

    );

}

const styles = StyleSheet.create({
    screen:{
      padding:50
    },
    oneRow:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    inputArea:{
      width:200, 
      borderBottomColor: 'black',
      borderBottomWidth:1,padding:10
    },
    items:{
      padding:10,
      margin:10,
      backgroundColor:'#fff',
      borderColor:'black',
      borderWidth:1
    },
    image: {
        width: 500,
        height: 200,
        resizeMode: 'stretch',
      },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });