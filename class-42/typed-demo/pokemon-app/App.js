import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import usePokeAPI from './hooks/usePokeAPI';


export default function App() {

  let { results, count, next } = usePokeAPI();
  console.log(results, count, next);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
