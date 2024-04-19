import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useEffect, useState } from 'react';

function Gallery() {
  const images = [
    {
      id: 1,
      url: require('./assets/logo1.png'),
      description: 'Image 1 Description'
    },
    {
      id: 2,
      url: require('./assets/logo2.png'),
      description: 'Image 2 Description'
    },
    {
      id: 3,
      url: require('./assets/logo3.png'),
      description: 'Image 3 Description'
    },
  ];

  const [imageId, setImageId] = useState(1)
  const [imageUrl, setImageUrl] = useState(images[imageId].url)

  const handlePrev = () => {
    if (imageId === 0) {
      setImageId(2)
      setImageUrl(images[2].url)
    }
    else { 
      setImageId(imageId - 1)
      setImageUrl(images[imageId - 1].url)
    }
  };

  const handleNext = () => {
    if (imageId === 2) {
      setImageId(0)
      setImageUrl(images[0].url)
    }
    else { 
      setImageId(imageId + 1) 
      setImageUrl(images[imageId + 1].url)
    }
  };

  return (
    <View>
      <Image source={imageUrl} style={{width: 100, height: 100}} />
      <Text>{images[imageId].description}</Text>
      <Button title="Prev" onPress={handlePrev}/>
      <Button title="Next" onPress={handleNext}/>

    </View>
  );
}


export default function App() {
    
  return (
    <View style={styles.container}>

      <Text>This is my gallery pictures</Text>
      <Gallery />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
