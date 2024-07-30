import { useState } from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useFetch } from '../../../hook/useFetch'

const Popularjobs = () => {
	const router = useRouter();

	const { data, isLoading, error, refetch } = useFetch('search', { query: 'React Developer', num_paes: 1 });

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
				) : errorLoading ? (
					<Text style={styles.errorText}>Error loading data</Text>
				): (
					<FlatList
						data={[1, 2, 3, 4, 5]}
						renderItem={({ item }) => <PopularJobCard item={item} />}
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