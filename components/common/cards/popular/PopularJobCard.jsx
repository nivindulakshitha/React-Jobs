import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selecetdJob, handleCardPress}) => {
  return (
    <TouchableOpacity style={styles.container(selecetdJob, item)}>
      <TouchableOpacity style={styles.logoContainer(selecetdJob, item)}>
        <Image
          source={{url: item.employer_logo}}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text>{item.employer_name}</Text>
    </TouchableOpacity>
  )
}

export default PopularJobCard