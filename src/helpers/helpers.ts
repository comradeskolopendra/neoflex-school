const numberFormatDeclimal = (number: number) => {
    return new Intl.NumberFormat("ru-RU", { currency: "RUB" }).format(number);
}

export {
    numberFormatDeclimal
}