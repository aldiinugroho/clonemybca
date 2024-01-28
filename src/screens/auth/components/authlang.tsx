import { Text, TouchableOpacity, View, Platform, StyleSheet, Image } from "react-native";
import { LanguageSelector, storeLanguage } from "../../../language/store";
import { statefontsize } from "../../../state";

function Index() {
  const setlang = storeLanguage((state) => state)
  return(
    <TouchableOpacity 
    onPress={() => {
      setlang.setvalue(setlang.defaultlang === LanguageSelector.ID ? LanguageSelector.EN : LanguageSelector.ID)
    }}
    style={styles.box}>
      <Text style={{
        fontWeight: '600',
        color: '#494F57',
        fontSize: statefontsize.medium
      }}>{setlang.defaultlang}</Text>
      <View style={{width: 3}}></View>
      <View style={{
        width: 23,
        height: 23,
        backgroundColor: 'gray',
        borderRadius: 23,
        overflow: 'hidden'
      }}>
        <Image
          style={{
            width: '100%',
            height: '100%'
          }}
          src={setlang.defaultlang === LanguageSelector.ID ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png' : 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg'}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 23,
    paddingLeft: 8,
    paddingRight: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      android: {
        elevation: 5,
        backgroundColor: 'rgba(0, 0, 0, 1)',
      },
    }),
  },
});

export default Index