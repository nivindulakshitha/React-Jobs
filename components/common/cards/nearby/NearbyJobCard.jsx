import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({ job, handleNavigate }) => {
	const [logoUrl, setLogoUrl] = useState('https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg');

	useEffect(() => {
		const fetchImageUrl = async () => {
			const isValid = await checkImageURL(job.employer_logo);
			if (isValid) {
				setLogoUrl(job.employer_logo);
			}
		};

		fetchImageUrl();
	}, [job.employer_logo]);

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={handleNavigate}
		>

			<TouchableOpacity style={styles.logoContainer}>
				<Image
					source={{ uri: logoUrl }}
					resizeMode='contain'
					style={styles.logoImage}
				/>
			</TouchableOpacity>

			<View style={styles.textContainer}>
				<Text style={styles.jobName} numberOfLines={1}>
					{job.job_title}
				</Text>

				<Text style={styles.jobType}>{job.job_employment_type}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default NearbyJobCard