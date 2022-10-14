import { BASE_URL } from "./baseUrl";


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

        return json.token

    } catch (error) {
        console.log(error)
    }
}