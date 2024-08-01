import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ logo, jobTitle, companyName, location }) => {
	const [companyLogo, setcompanyLogo] = useState('https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg')

	useEffect(() => {
		if (checkImageURL(logo)) {
			setcompanyLogo(logo)
		} else {
			setcompanyLogo('https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg')
		}
	}, [companyLogo])

  return (
	  <View style={styles.container}>
		  <View style={styles.logoBox}>
			<Image 
				source={{ uri: companyLogo }}
				  resizeMode='contain'
				  style={styles.logoImage}
			/>
		  </View>

		  <View style={styles.jobTitleBox}>
			  <Text style={styles.jobTitle}>{jobTitle}</Text>
		  </View>

		  <View style={styles.companyInfoBox}>
			  <Text style={styles.companyName}>{companyName} / </Text>
			  <View style={styles.locationBox}>
				  <Image
					  source={icons.location}
					  resizeMode='contain'
					  style={styles.locationImage}
				  />
				  <Text style={styles.locationName}>{location}</Text>
			  </View>
		  </View>
    </View>
  )
}

export default Company