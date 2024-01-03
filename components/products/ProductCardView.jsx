import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import {COLORS, SIZES} from "../../constants";
import { useNavigation } from '@react-navigation/native';

import {Ionicons} from '@expo/vector-icons';

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
              
                source={{uri:"https://www.smashbros.com/images/og/toon_link.jpg"}}
                style={styles.image}
              />
            </View>

            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={1}>Product</Text>
              <Text style={styles.supplier} numberOfLines={1}>Product</Text>
              <Text style={styles.price}>555</Text>
            </View>

            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-circle" size={35} color={COLORS.primary}></Ionicons>
            </TouchableOpacity>

        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

const styles = StyleSheet.create({

  container:{
      width: 182,
      height:240,
      marginEnd: 22,
      borderRadius: SIZES.medium,
      backgroundColor:COLORS.secondary

  },
  imageContainer:{
    flex: 1,
    width: 170,
    marginLeft: SIZES.small/2,
    marginTop: SIZES.small/2,
    borderRadius: SIZES.small,
    overflow: "hidden",

  },
  image: {
      aspectRatio: 1,
      resizeMode: 'cover'
  },
  details: {
      padding: SIZES.small
  },
  title:{
      fontFamily: "bold",
      fontSize: SIZES.large,
      marginBottom: 2
  },
  supplier:{
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray
  },
  price:{
    fontFamily: "bold",
    fontSize: SIZES.medium,
    
  },
  addBtn: {
      position: "absolute",
      bottom: SIZES.xSmall,
      right: SIZES.xSmall
  }

  
  
})