import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import {COLORS} from '../../constants';

const Carousel = () => {
    const slides=[
        "https://www.smashbros.com/images/og/toon_link.jpg",
        "https://assetsio.reedpopcdn.com/138018903257.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-breath-of-the-wild-2/3/3b/All-recipe-guide-totk.jpg?width=640"
    ]
        
  return (
    <View style={styles.carouselContainer}>
        <SliderBox images={slides}
            dotColor={COLORS.primary}
            inactiveDotColor ={COLORS.secondary}
            ImageComponentStyle ={{borderRadius:15, width:"95%", marginTop:15}}
            autoplay
            circleLoop
        />
        
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:"center"
    }
})