import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';




export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
        <View style={styles.oneRow}>
        <Text style={styles.infoText}>Covid19 Information App</Text>
        <Image
          style={styles.image}
          source={require('../../assets/covid19.jpg')} />
        </View>

        <TouchableOpacity onPress={() => 
              navigation.navigate('World')}
            style={styles.items}
          >
          <Text style={styles.Text}>World Summury </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => 
              navigation.navigate('Map')}
            style={styles.items}
          >
          <Text style={styles.Text}>Check Information on Map</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => 
              navigation.navigate('Countries')}
            style={styles.items}
          >
          <Text style={styles.Text}>Different Countries</Text>
      </TouchableOpacity>


      </ScrollView>
      
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerShwon: false,
};



const styles = StyleSheet.create({
  oneRow:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 2,
  },
  items:{
    padding:10,
    margin:12,
    backgroundColor:'#fff',
    borderColor:'black',
    borderWidth:1
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  infoText:{
    fontSize:20,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    margin:20,
    fontSize:25,
    fontWeight:'bold'
  },
  contentContainer: {
    paddingTop: 30,
  },
  Text: {
    flex: 1,
    fontSize: 19,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
});
