import { View, Text, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import {COLORS, SIZES} from "../../constants/index";
import {Feather, Ionicons} from '@expo/vector-icons';
//import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <View >
            <Text style={styles. welcomeTxt(COLORS.black, SIZES.xSmall)}>Bisi mi Aradın</Text>
            <Text style={styles. welcomeTxt(COLORS.primary, SIZES.xSmall)}>Bak ara bul</Text>
        </View>
      </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity>
              <Feather name="search" size={24} style={styles.searchIcon}></Feather>
          </TouchableOpacity>

          <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
              value=""
              onPressIn={()=>navigation.navigate("Search")}
              placeholder="Ara ara kulanıcı çekinme"/>

        
          </View>

          <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="camera-outline" size={SIZES.xxLarge} color={COLORS.offwhite}></Ionicons>

          </TouchableOpacity>
        </View>
        </View>
   
      </View>

      
    
  )
}

export default Welcome

 