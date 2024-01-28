import * as React from 'react';
import { Button, Dimensions, FlatList, Keyboard, ScrollView, Text, TextInput, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { AuthCarousel, AuthLang } from './components';
import { Language } from '../../language';
import { statecustomcolor, statefontsize } from '../../state';
import { CTextview } from '../../components';

function Index() {

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={{ 
			display: 'flex',
			flex: 1,
		}}>
			<AuthCarousel />
			<View style={{
				flex: 1,
				padding: 25,
				marginTop: -10,
				borderTopLeftRadius: 10,
				borderTopRightRadius: 10,
				backgroundColor: 'white'
			}}>
				<AuthLang />
				<Text style={{
					color: statecustomcolor.darkblue,
					fontSize: statefontsize.medium
				}}>{Language()?.auth?.tvhello}</Text>
				<View style={{padding: 5}} />
				<Text style={{
					fontWeight: 'bold',
					fontSize: statefontsize.medium,
					color: statecustomcolor.darkblue,
				}}>ALDI NUGROHO</Text>
				<View style={{padding: 2}} />
				<Text style={{
					fontSize: statefontsize.medium,
					color: statecustomcolor.lightblue,
				}}>NU********I</Text>
				<View style={{padding: 15}} />
				<CTextview />
				<View style={{padding: 8}} />
				<Text style={{
					fontSize: statefontsize.minimedium3,
					color: statecustomcolor.daylightblue,
					alignSelf: 'flex-end'
				}}>{Language()?.auth?.tvpassreset}</Text>
			</View>
		</View>
		</TouchableWithoutFeedback>
	);
}

export default Index;