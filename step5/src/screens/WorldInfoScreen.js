import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, RefreshControl, Text, View, ScrollView, Image, FlatList } from 'react-native';

import { api } from '../services/api';

export default function App() {
    const [worldStat, setWorldStat] = useState({})
    const [refreshing, setRefreshing] = useState(false);
    const [autoRefresh, setAutoRefresh] = useState()

    async function loadData() {
        if (autoRefresh)
            setAutoRefresh(clearTimeout(autoRefresh))

        setRefreshing(true);

    const { data: world } = await api().get('coronavirus/worldstat.php')
    const { total_cases, total_deaths, total_recovered } = world
    setWorldStat(world)
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
            <View>
            <Image
          style={styles.image}
          source={require('../../assets/worldMap.jpg')} />
           </View>

            <View style={styles.oneRow}>
            <Text style={styles.items}>
            TOTAL CONFIRMED:
            </Text>
            <Text style={styles.items}>
             {worldStat.total_cases}
            </Text>
            </View>

            <View style={styles.oneRow}>
            <Text style={styles.items}>
            TOTAL DEATHS:
            </Text>
            <Text style={styles.items}>
             {worldStat.total_deaths}
            </Text>
            </View>

            <View style={styles.oneRow}>
            <Text style={styles.items}>
            TOTAL RECOVERED:
            </Text>
            <Text style={styles.items}>
             {worldStat.total_recovered}
            </Text>
            </View>

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