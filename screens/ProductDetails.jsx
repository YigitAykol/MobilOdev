import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import {COLORS,SIZES} from "../constants";
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';

const ProductDetails = ({navigation}) => {
  const [count, setCount] = useState(1)

  const increment = () =>{
    setCount(count + 1)
  }
  const decrement = () =>{
    if(count-1)
    {
      setCount(count - 1)
    }
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30}></Ionicons>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name='heart' size={30} color={COLORS.red}> </Ionicons>
        </TouchableOpacity>
      </View>

      <Image
      source={{uri:"https://www.smashbros.com/images/og/toon_link.jpg"}}
      style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
          <Text style={styles.price}>666</Text>
        </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          {[1,2,3,4,5].map((index) =>(
              <Ionicons
              key={index}
              name='star'
              size={24}
              color="gold"
              />
          ))}
          <Text style={styles.ratingText}>  (4.9)</Text>
        </View>
        
        <View style={styles.rating}>
          <TouchableOpacity onPress={()=>increment()}>
            <SimpleLineIcons 
            name='plus'
            size={20}
            />
          </TouchableOpacity>
          <Text style={styles.ratingText}>{count}</Text>

          <TouchableOpacity onPress={()=>decrement()}>
              <SimpleLineIcons
                name='minus' size={20}
              />
          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.descriptionWraper}>

        <Text style={styles.description}></Text>
        <Text style={styles.descText}>
          link from zelda with happy tiktok face
        </Text>
      </View>

      <View style={{marginBottom: SIZES.small}}>
        <View style={styles.location}>
          <View>
          <Ionicons name='location-outline' size={20}/>
           <Text>  Kocaeli</Text>
          </View>
           <View style={{flexDirection: "row"}}>
            <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
            <Text> Beleş gönderim</Text>
          </View>
        </View>
       </View>

       <View style={styles.cartRow}>
          <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Satın Al</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite}></Fontisto>
          </TouchableOpacity>
       </View>

      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  upperRow:{
    marginHorizontal:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    position:"absolute",
    top: SIZES.xxLarge,
    width:SIZES.width-44,
    zIndex:999

  },
  image:{
    aspectRatio:1,
    resizeMode:"cover"
  },
  details:{
    marginTop:-SIZES.large,
    backgroundColor:COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius:SIZES.medium,
    borderTopRightRadius:SIZES.medium
  },
  cartRow:{
    paddingBottom:SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:SIZES.width,
  },
  cartBtn:{
    witdh:SIZES.width*0.7,
    backgroundColor: COLORS.black,
    padding:SIZES.small/2,
    borderRadius:SIZES.large,
    marginLeft: 12
  },
  titleRow:{
    marginHorizontal:20,
    paddingBottom:SIZES.small,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    witdh:SIZES.width-44,
    top:20

  },
  ratingRow:{
    paddingBottom:SIZES.small,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center",
    width: SIZES.width-10,
    top:5
  },
  rating:{
    top:SIZES.large,
    flexDirection:"row",
    justifyContent: "flex-start",
    alignItems:"center",
    marginHorizontal: SIZES.large
  },
  descriptionWraper:{
    marginTop:SIZES.large*2,
    marginHorizontal:SIZES.large
  },
  description:{
    fontFamily:"medium",
    fontSize:SIZES.large -2
  },
  descText:{
    fontFamily:"regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom:SIZES.small
  },
  location:{
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:COLORS.secondary,
    marginHorizontal: 12,
    padding: 5,
    borderRadius: SIZES.large
  },
  cartTitle:{
    marginLeft:SIZES.small,
    fontFamily:"bold",
    fontSize:SIZES.medium,
    color: COLORS.lightWhite
  },
  title:{
    fontFamily:"bold",
    fontSize:SIZES.large
  },
  ratingText:{
    color:COLORS.gray,
    fontFamily: "medium",
    paddingHorizontal: SIZES.xSmall
  },
  price:{
    paddingHorizontal:10,
    fontFamily:"semiBold",
    fontSize: SIZES.large
  },
  priceWrapper:{
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.large
  },
  addCart:{
    width:37,
    height: 37,
    borderRadius:50,
    margin: SIZES.small,
    backgroundColor:COLORS.black,
    alignItems: "center",
    justifyContent: "center"
  }

})