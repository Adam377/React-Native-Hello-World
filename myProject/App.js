//Week 1 Hello World
import React, {Component, useState, useEffect} from 'react';
import {Text, View} from 'react-native';

class HelloWorldApp extends Component
{
	render()
	{
		let name = "Adam";
		
		return(
			<View>
				<SayHello name="Ash" />
			</View>
		);
	}
}

class SayHello extends Component
{
	render()
	{
		return(
			<View>
				<Text>Hello {this.props.name}</Text>
			</View>
		);
	}
}

//export default HelloWorldApp;

const Blink = (props) =>
{
	const [isShowingText, setIsShowingText] = useState(true);
	
	useEffect(() =>
	{
		const toggle = setInterval(() =>
		{
			setIsShowingText(!isShowingText);			
		}, 1000);
		
		return() => clearInterval(toggle);
	})
	
	if(!isShowingText)
	{
		return null;
	}
	
	return <Text>{props.text}</Text>;
}

const BlinkApp = () =>
{
	return(
		<View style={{marginTop: 50}}>
			<Blink text='I love to blink' />
			<Blink text='Yes blinking is so great' />
			<Blink text='Why did they ever take this out of HTML' />
			<Blink text='Look at me look at me look at me' />
		</View>
	);
}

export default BlinkApp;