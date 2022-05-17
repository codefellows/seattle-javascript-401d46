import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NativeBaseProvider, Box, Heading, HStack, ScrollView } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import PressableButton from './components/PressableButton';
import usePokeAPI from './hooks/usePokeAPI';

export default function App() {

  let { results, fetch } = usePokeAPI();

  const config = {
    dependencies: {
      "linear-gradient": LinearGradient
    }
  };

  return (
    <NativeBaseProvider config={config}>
      <Box bg={{
        linearGradient: {
          colors: ["lightBlue.300", "violet.800"],
          start: [0, 0],
          end: [1, 0]
        }}}>
        <SafeAreaView>
          <Heading size="xl" m="5" textAlign="center" color="white">My Pokemon App!</Heading>
          <ScrollView mb="175">
            <HStack space={3} justifyContent="center" flexWrap="wrap">
              {results ? results.map(pokemon => <PressableButton bgColor="red" textColor="white">{pokemon.name}</PressableButton>) : null}
            </HStack>
          </ScrollView>
          <StatusBar style="auto" />
        </SafeAreaView>
      </Box>
    </NativeBaseProvider>
  );
}
