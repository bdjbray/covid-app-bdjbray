import React, { useState } from 'react'
import { StyleSheet, View, Text} from 'react-native'



export default function CountryButton({ item }) {

    const [stats, setCountryStats] = useState(null)

    return (
        <View>
            {
                <View style={styles.oneRow}>
                  <Text style={styles.countryname}>{item.country_name}  </Text>  
                <Text style={styles.items}> total confirmed: {item.cases} </Text>
                <Text style={styles.items}>active cases: {item.active_cases} total deaths: {item.deaths}</Text>
                </View>
            }

        </View>

    )

}

const styles = StyleSheet.create({
    
    oneRow:{
        width:800,
        padding:20
      },
      countryname:{
        padding:2,
        margin:10,
        fontSize:30,
        fontWeight: "bold",
      },
      items:{
        padding:2,
        margin:10,
        fontSize:17
        
      },
})

