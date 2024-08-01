import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, comapnyName, location }) => {
	const [companyLogo, setcompanyLogo] = useState('https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg')

	useEffect(() => {
		if (companyLogo) {
			setcompanyLogo(companyLogo)
		}
	}, [companyLogo])

  return (
	  <View style={styles.container}>
		  <View style={styles.logoBox}>
			<Image 
				source={{ uri: companyLogo }}
			/>
		  </View>
    </View>
  )
}

export default Company