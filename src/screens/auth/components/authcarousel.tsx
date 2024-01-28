import * as React from 'react';
import { Dimensions, FlatList, Image, Text, View, useWindowDimensions } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

function Index() {
  const width: number = Dimensions.get('window').width;
  const [dot,setdot] = React.useState<Number>(0)
  const data: string[] = [
    'https://cdn1-production-images-kly.akamaized.net/odT_wmnUuyK_unInU6qYfOzcwrw=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4330739/original/094191900_1676895327-Main-Banner-BCA-Expoversary-2023-650x350.jpg',
    'https://bca-hut-65.vercel.app/images/Banner_Tulus_BCA.jpg',
    'https://www.bca.co.id/id/Campaign/2022/-/media/Images/campaign/2022/Contactless/20220914-MASTERCARD-Contactless-Banner',
    'https://www.static-src.com/siva/asset/05_2023/BCAgallery2023-2024_micrositeapp_1080x607px.jpg',
    'https://images.bisnis.com/upload/img/paylater_BCA.jpg'
  ];
  return (
    <View style={{ 
      backgroundColor: 'orange'
    }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        autoPlayInterval={3000}
        // scrollAnimationDuration={1000}
        onSnapToItem={(index) => setdot(index)}
        // onProgressChange={(index) => console.log('ON CHANGE index:', index)}
        renderItem={({index,item}) => (
          <View
            style={{
              flex: 1,
              // borderWidth: 1,
              justifyContent: 'center',
              backgroundColor: 'yellow'
            }}
          >
            <Image 
              style={{
                width: '100%',
                height: '100%'
              }}
              src={item}
            />
          </View>
        )}
      />
      <FlatList 
        style={{
          position: 'absolute',
          bottom: 0,
          marginBottom: 20,
          alignSelf: 'center'
        }}
        scrollEnabled={false}
        horizontal={true}
        data={data}
        ItemSeparatorComponent={() => <View style={{width:10}}></View>}
        renderItem={({index,item}) => (
          <View style={{
            width:8,
            height:8,
            borderRadius: 10,
            backgroundColor: index === dot ? '#00AAE6' : '#e8e8e8'
          }}></View>
        )}
      />
    </View>
  );
}

export default Index;