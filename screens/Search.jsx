import { StyleSheet,TouchableOpacity, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather, Ionicons} from '@expo/vector-icons';
import styles from './search.style';
import { SIZES, COLORS } from '../constants';

const Search = () => {
  return (
    <SafeAreaView>
      

        <View style={styles.searchContainer}>
          <TouchableOpacity>    
              <Ionicons 
              name="camera-outline" 
              size={SIZES.xLarge} 
              style={styles.searchIcon}>
              </Ionicons>
          </TouchableOpacity>

          <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
              value=""
              onPressIn={()=>{}}
              placeholder="Ara ara kulanıcı çekinme"
            />
          </View>

          <View>
            <TouchableOpacity style={styles.searchBtn}>
              <Feather name="search" size={24} color={COLORS.offwhite}></Feather>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Search;

