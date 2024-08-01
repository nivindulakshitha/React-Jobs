import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full Time", "Part Time", "Internship", "Freelance", "Temporary"];

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState("Full Time");

	const handleJobTypePress = (jobType) => {
		setActiveJobType(jobType);
		router.push(`/search/${jobType}`);
	};
	
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
						value={searchTerm}
						onChangeText={(text) => { setSearchTerm(text) }}
						placeholder='What are you looking for?'
					/>
				</View>

				<TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
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
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => handleJobTypePress(item)}
						>
							<Text style={styles.tabText(activeJobType, item)}>
								{item}
							</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ columnGap: SIZES.small, paddingHorizontal: SIZES.padding }}
				/>
			</View>
		</View>
	);
};

export default Welcome;
