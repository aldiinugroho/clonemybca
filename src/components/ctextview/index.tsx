import { Animated, Text, TextInput, View } from "react-native";
import { statecustomcolor, statefontsize } from "../../state";
import { Language } from "../../language";
import { useRef, useState } from "react";

function Index() {
  const transY = useRef(new Animated.Value(0))
  const [focus,setfocus] = useState<boolean>(false)

  const handlefocus = () => {
    setfocus(true)
    Animated.timing(transY.current, {
      toValue: -20,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  const handleblur = () => {
    setfocus(false)
    Animated.timing(transY.current, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  const transX = transY.current.interpolate({
    inputRange: [-20,0],
    outputRange: [0,0],
    extrapolate: 'clamp'
  })

  return(
    <View>
      <Animated.View style={[
        {
          position: 'absolute',
          top: 0,
          bottom: 0,
          justifyContent: 'center'
        },
        {
          transform: [
            {translateY: transY.current},
            {translateX: transX}
          ]
        }
      ]}>
        <Text style={{
          fontSize: focus ? statefontsize.minimedium3 : statefontsize.medium,
          padding: 5,
          paddingLeft: 0,
          color: statecustomcolor.lightblue,
          fontWeight: 'bold'
        }}>{Language()?.auth?.tvpass}</Text>
      </Animated.View>
      <View style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TextInput 
          onFocus={handlefocus}
          onBlur={handleblur}
          style={{
            flex: 1,
            // backgroundColor: 'yellow',
            padding: 5,
            paddingLeft: 0,
            fontSize: statefontsize.medium
          }}
          secureTextEntry={true}
        />
      </View>
    </View>
  )
}

export default Index