import { View, Text, Dimensions, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height} = Dimensions.get( 'window');

const Home = () => {

  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Caller id</Text>
        </View>
        <View style={styles.numberInput}>
          <TextInput
            placeholder='Enter phone number'
            value={phoneNumber}
            onChange={() => console.log('hello')}
            style={styles.input}
          />
        </View>
        <View style={styles.views}>
          <Text style={styles.frequent}>Frequently called</Text>
          <Text>view all</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text>The Disabler</Text>
            <Text>Incoming</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "grey",
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.015,
    marginBottom: height * 0.05
  },
  numberInput:{
    paddingHorizontal: width * 0.1,
    marginBottom: height * 0.1
  },
  input:{
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.05,
    fontSize: 12
  },
  views:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.18
  },
  frequent:{
    fontWeight: 'bold',
    fontSize: 14
  },
  cardContainer:{
    alignItems: 'center'
  },
  card:{
    backgroundColor: 'lightgrey',
    height: height * 0.44,
    width: width * 0.8,
    borderRadius: 20,
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.05,
  }
})