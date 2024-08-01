import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import { checkImageURL } from '../../../../utils'

const PopularJobCard = ({ item, selecetdJob, handleCardPress }) => {
	const [logoUrl, setLogoUrl] = useState('https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg');

	useEffect(() => {
		const fetchImageUrl = async () => {
			const isValid = await checkImageURL(item.employer_logo);
			if (isValid) {
				setLogoUrl(item.employer_logo);
			}
		};

		fetchImageUrl();
	}, [item.employer_logo]);

	return (
		<TouchableOpacity style={styles.container(selecetdJob, item)} onPress={handleCardPress}>

			<TouchableOpacity style={styles.logoContainer(selecetdJob, item)}>
				<Image
					source={{ uri: logoUrl }}
					resizeMode='contain'
					style={styles.logoImage}
				/>
			</TouchableOpacity>

			<Text style={styles.companyName} numberOfLines={1}>
				{item.employer_name}
			</Text>

			<View style={styles.infoContainer}>
				<Text style={styles.jobName(selecetdJob, item)} numberOfLines={1}>
					{item.job_title}
				</Text>

				<Text style={styles.location}>{item.job_country}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default PopularJobCard