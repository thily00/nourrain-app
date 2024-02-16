import React from 'react'
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { View, StyleSheet} from 'react-native'
import { LocationObject } from 'expo-location';



const MapsScreen = () => {
    const [location, setLocation] = React.useState<LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = React.useState('');

    React.useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);

          console.log(location);
          
        })();
    }, []);
    

    return (
        <View style={styles.container}>
            {
                location !== null && (
                    <MapView  
                        region={{
                            latitude: location?.coords.latitude,
                            longitude: location?.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        style={styles.map} 
                    />
                )
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
});

export default MapsScreen