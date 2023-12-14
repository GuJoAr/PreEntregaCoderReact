

//funcion que pasa a Mayuscula la primer letra del titulo y las demas las deja en minuscula

export function toCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
