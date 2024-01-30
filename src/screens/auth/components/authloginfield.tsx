import { Text, View } from "react-native";
import { CTextview } from "../../../components";
import { statecustomcolor, statefontsize } from "../../../state";
import { Language } from "../../../language";

function Index() {
  return(
    <View>
      <CTextview />
      <View style={{padding: 8}} />
      <Text style={{
        fontSize: statefontsize.minimedium3,
        color: statecustomcolor.daylightblue,
        alignSelf: 'flex-end'
      }}>{Language()?.auth?.tvpassreset}</Text>
      <View style={{padding: 12}} />
      {/* BUTTON LOGIN */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'orange'
      }}>
        <View style={{
          flex: 1,
          backgroundColor: statecustomcolor.lightgray,
          borderRadius: 45,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{
            color: 'white',
            fontWeight: '500',
            fontSize: statefontsize.medium,
          }}>{Language()?.auth?.tvlogin}</Text>
        </View>
        <View style={{width: 10}} />
        <View style={{
          // backgroundColor: 'pink',
          width: 45,
          height: 45,
          borderColor: statecustomcolor.lightblue,
          borderWidth: 1,
          borderRadius: 12
        }}>
        </View>
      </View>
      {/* END OF BUTTON LOGIN */}
    </View>
  )
}

export default Index