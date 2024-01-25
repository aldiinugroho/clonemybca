import { Button, Text, View } from "react-native";
import { goBack, navigateTo } from "../../routes";

function Index({navigation}: HomeScreenProps): React.JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go back"
        onPress={() => goBack()}
      />
    </View>
  );
}

interface HomeScreenProps {
  navigation: any
}

export default Index