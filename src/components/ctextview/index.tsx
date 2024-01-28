import { Animated, Text, TextInput, TouchableOpacity, View } from "react-native";
import { statecustomcolor, statefontsize } from "../../state";
import { Language } from "../../language";
import { useRef, useState } from "react";

function Index() {
  const transY = useRef(new Animated.Value(0))
  const [filled,setfilled] = useState<boolean>(false)
  const [showpass,setshowpass] = useState<boolean>(false)
  const [fieldvalue,setfieldvalue] = useState<string>('')

  const handlefocus = () => {
    setfilled(true)
    Animated.timing(transY.current, {
      toValue: -25,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  const handleblur = (value: string) => {
    if (value.length === 0) {
      setfilled(false)
      Animated.timing(transY.current, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }

  const transX = transY.current.interpolate({
    inputRange: [-25,0],
    outputRange: [0,0],
    extrapolate: 'clamp'
  })

  return(
    <View>
      <Animated.View style={[
        {
          // backgroundColor: 'orange',
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
          fontSize: filled ? statefontsize.minimedium3 : statefontsize.medium,
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
        alignItems: 'center',
        paddingBottom: 5
      }}>
        <TextInput 
          onFocus={handlefocus}
          onBlur={() => handleblur(fieldvalue)}
          onChangeText={(text) => setfieldvalue(text)}
          style={{
            flex: 1,
            // backgroundColor: 'yellow',
            padding: 5,
            paddingLeft: 0,
            fontSize: statefontsize.medium
          }}
          secureTextEntry={!showpass}
        />
        <TouchableOpacity 
        onPress={() => setshowpass(!showpass)}
        style={{
          height: 30,
          width: 30,
          backgroundColor: 'black'
        }}></TouchableOpacity>
      </View>
    </View>
  )
}

export default Index