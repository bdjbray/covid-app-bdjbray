import React from "react";
import { View,StyleSheet} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"; 
import useResults from "../hooks/useResults"; 


const geoData = require('../../country-json/src/country-by-geo-coordinates.json');

function setCoords(inputData, resultData) {
    let coordinate = 0
    try {
        temp = inputData.filter( (obj) => {
            return ((obj.country === resultData))
        })
        
        coordinate = {
          latitude: (parseFloat(temp[0]['north']) + parseFloat(temp[0]['south']))/2,
          longitude: (parseFloat(temp[0]['west']) + parseFloat(temp[0]['east']))/2
        }
        
    } catch(error) {
        coordinate = {
          latitude: 50,
          longitude: 60 
        }
    }
    if (isNaN(coordinate.latitude) | isNaN(coordinate.longitude)) {
        coordinate = {
          latitude: 60,
          longitude: 50 
        }
    }
    return coordinate
}




const MapScreen = ({ navigation }) => {
  [searchApi, results, errorMessage] = useResults();
  return (
    <View style={{}}>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          initialRegion={{
            latitude: 37.8566,
            longitude: 23.3522,
            latitudeDelta: 39, 
            longitudeDelta: 70,
          }}
        >
        {results[0] != null  && results.map((result, index) => (
              <Marker
                  key = {index}
                  coordinate = {setCoords(geoData, result.Country)}
                  title = { result.Country }
                  description={`Total Confirmed: ${result.TotalConfirmed}`}  
                  opacity={1.0}  
              >
              </Marker>
          ))
         }
        </MapView>
      </View>
    </View>
  );
};
export default MapScreen;


const styles = StyleSheet.create({
  mapContainer: {
    height: 1200,
    width: 800,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  
});