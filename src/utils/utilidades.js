import { DATA } from "../data/data"


export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DATA)
        }, 1000)
    })
}