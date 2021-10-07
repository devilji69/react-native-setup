import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeString = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
      return true
    } catch (e) {
      console.log("Store Error: ", e)
      return false
    }
}

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    return true
  } catch (e) {
    console.log("Store Error: ", e)
    return false
  }
}

export const getString = async (key) => {
    let value = null
    try {
      value = await AsyncStorage.getItem(key)
    } catch(e) {
        console.log("Fetch Error: ", e)
    }
    return value !== null ? value : null
}

export const getData = async (key) => {
    let jsonValue = null
    try {
        jsonValue = await AsyncStorage.getItem(key)
    } catch(e) {
        console.log("Fetch Error: ", e)
    }
    return jsonValue != null ? JSON.parse(jsonValue) : null;
}  