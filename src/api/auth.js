import { BASE_URL } from "./baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const apiLogin = async (data) => {
    const path = "/auth/obtain_token/"
    try {
        const response = await fetch(BASE_URL + path, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        const json = await response.json()
        await AsyncStorage.setItem('userToken', JSON.stringify(json.token))

        return json.token

    } catch (error) {
        console.log(error)
    }
}