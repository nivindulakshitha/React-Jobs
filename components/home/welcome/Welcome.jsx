import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-Type", "Part-Time", "Freelance"];

const Welcome = () => {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View>
		  <View style={styles.container}>
			  <Text style={styles.userName}>Hello, Andrian!</Text>
			  <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
		  </View>

		  <View style={styles.searchContainer}>
			  <View style={styles.searchWrapper}>
				  <TextInput
					  style={styles.searchInput}
					  value='' onChange={() => { }}
					  placeholder='What are you looking for?'>

				  </TextInput>
			  </View>

			  <TouchableOpacity style={styles.searchBtn} onpress={() => {}}>
				  <Image
					  source={icons.search}
					  resizeMode='contain'
					  style={styles.searchBtnImage}

				  />
			  </TouchableOpacity>
		  </View>

		  <View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({item}) => {
						<TouchableOpacity style={styles.tab(activeJobType, item)}>
							<Text>{item}</Text>
						</TouchableOpacity>
					}}
				/>
		  </View>
    </View>
  )
}

export default Welcome