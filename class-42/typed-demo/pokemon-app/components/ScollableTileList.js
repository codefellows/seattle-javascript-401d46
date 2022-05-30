import { ScrollView, HStack } from "native-base";

const ScrollableTileList = ({data, render}) => {

  const Stack = () => data ?
    <HStack space={3} justifyContent="center" flexWrap="wrap">
      {data.map(item => render(item))}
    </HStack>
    : null

  return (
    <ScrollView mb="175">
      <Stack />
    </ScrollView>
  )
}

export default ScrollableTileList;
