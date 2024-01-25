import Config from "react-native-config";

interface SecretProps {
  envType?: String
}

export const Secret: SecretProps = {
  envType: Config.ENV_TYPE
}