import { useState } from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
	const router = useRouter();
	const [selecetdJob, setSelecetdJob] = useState();
	const handleCardPress = (job) => {
		if (job) {
			setSelecetdJob(job.job_id);
			router.push(`/job-details/${job.job_id}`);
		}
	}

	const { data, isLoading, error, refetch } = useFetch('search', { query: 'React developer', num_pages: 1 });

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popular Jobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text style={styles.errorText}>Error loading data</Text>
				): (
					<FlatList
						data={data}
								renderItem={({ item }) => <PopularJobCard item={item} selecetdJob={selecetdJob} handleCardPress={handleCardPress} />}
						keyExtractor={item => item?.job_id}
						contentContainerStyle={{columnGap: SIZES.medium}}
						horizontal
					/>
				)}
			</View>
		</View>
	)
}

export default Popularjobs