import  MOCK_DATA  from "../data/data.json"


export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000)
    })
}
