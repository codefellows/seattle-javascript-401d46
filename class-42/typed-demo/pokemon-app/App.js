import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NativeBaseProvider, Box, Heading} from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import ScrollableTileList from './components/ScollableTileList';
import PressableButton from './components/PressableButton';
import usePokeAPI from './hooks/usePokeAPI';

export default function App() {

  let { results } = usePokeAPI();

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
        }
      }}>
        <SafeAreaView>
          <Heading
            size="xl"
            m="5"
            textAlign="center"
            color="white"
          >
            My Pokemon App!
          </Heading>
          <ScrollableTileList
            data={results}
            render={(item) => <PressableButton
              key={item.name}
              bgColor="red"
              textColor="white"
            >
              {item.name}
            </PressableButton>
            }
          />
          <StatusBar style="auto" />
        </SafeAreaView>
      </Box>
    </NativeBaseProvider>
  );
}
