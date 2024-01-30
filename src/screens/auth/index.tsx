import * as React from 'react';
import { Button, Dimensions, FlatList, Keyboard, ScrollView, Text, TextInput, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { AuthCarousel, AuthLang, Authloginfield } from './components';
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
				<Authloginfield />
				<View style={{padding: 12}} />
				<Text style={{
					textAlign: 'center',
					fontSize: statefontsize.minimedium3,
					color: statecustomcolor.darkblue,
					fontWeight: 'bold'
				}}>
					{Language()?.auth?.tvanotheracc}
				</Text>
				<View style={{padding: 35}} />
				<View style={{
					display: 'flex',
					flexDirection: 'row',
					backgroundColor: statecustomcolor.lightorange,
					padding: 10,
					borderRadius: 10,
				}}>
					<View style={{
						width: 20,
						height: 20,
						borderRadius: 20,
						backgroundColor: statecustomcolor.lightbrown
					}}></View>
					<View style={{padding: 5}} />
					<View>
						<Text style={{
							color: statecustomcolor.lightbrown,
							fontSize: statefontsize.minimedium2,
						}}>{Language()?.auth?.tvupdatewarn1} <Text style={{
							fontWeight: 'bold'
						}}>{Language()?.auth?.tvbcaidpass}</Text> <Text>{Language()?.auth?.tvupdatewarn2}</Text></Text>
						<Text style={{
							color: statecustomcolor.darkblue,
							fontSize: statefontsize.minimedium2,
							textDecorationLine: 'underline',
							fontWeight: '500'
						}}>
							{Language()?.auth?.tvmoreinfo}
						</Text>
					</View>
				</View>
			</View>
		</View>
		</TouchableWithoutFeedback>
	);
}

export default Index;