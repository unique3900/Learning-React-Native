import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,Image, Button } from 'react-native';
import AppWithState from './Components/AppWithState';

export default function App() {
  return (
    <View style={{
      width: '100%',
      height:'100vh',
      display: 'flex',
      marginTop:'80px',
      flexDirection: 'column',
      alignItems:'center'
    }}>
      <Text style={{textAlign:'center'}}>Random Text</Text>
      <View>
        <Image  source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}
        />
        <Text>Some Another Random Texts</Text>
        <Button title='Take me to the moon'/>
      </View>


      <AppWithState/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
