export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols!`;

    return undefined;
}

export const required = value => value ? undefined : 'Поле является обязательным';
export const maxLength = max => value =>
    value && value.length > max ? `Не более ${max} символов` : undefined
//const maxLength15 = maxLength(15)
export const number = value => value && isNaN(Number(value)) ? 'Введите число' : undefined
export const minLength = min => value =>
    value && value.length < min ? `Не менее ${min} символов` : undefined
//const minValue18 = minValue(18)
//export const minValue12 = minValue(12)
export const phoneNumber = value =>
    value &&  /^(8|9)[0-9]{2}$/.test(value) ?
        'Номер введен неверно' : undefined
export const birthDate = value =>
    // value && /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/.test(value) ?
    value && !/^\d\d\.\d\d\.\d{4}$/.test(value) ?
        'Введите корректную дату' : undefined

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Введен некорректный адрес почты' : undefined
// const tooOld = value =>
//     value && value > 65 ? 'Возможно вы слишком стары для всего этого' : undefined
// const aol = value =>
//     value && /.+@aol\.com/.test(value) ?
//         'Серьезно? Вы все еще используете AOL для своей почты?' : undefined