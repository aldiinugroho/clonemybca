import { Button, Text, View } from "react-native";
import { goBack, navigateTo, popToTop, push } from "../../routes";

function Index({navigation}: AuthScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Auth Screen</Text>
      <Button title="Go Home" onPress={() => push('Home')} />
    </View>
  );
}

interface AuthScreenProps {
  navigation: any
}

export default Index