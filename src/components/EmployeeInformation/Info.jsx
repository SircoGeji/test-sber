import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from "./Info.module.sass";
import {birthDate, email, minLength, maxLength, phoneNumber, required} from "../../utils/validators/validators";
import {DateCalendar, Input, Select} from "../common/FormsControls/FormsControls";

const InfoForm = (props) => {
    return (
        <form className={styles.infoForm} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Фамилия'}
                    name={'surname'}
                    component={Input}
                    validate={[required]}
                    className={styles.LongField}
                />
            </div>
            <div>
                <Field
                    placeholder={'Имя'}
                    name={'name'}
                    component={Input}
                    validate={[required]}
                    className={styles.LongField}
                />
            </div>
            <div>
                <Field
                    placeholder={'Отчество'}
                    name={'patronymic'}
                    component={Input}
                    validate={[]}
                    className={styles.LongField}
                />
            </div>
            <div className={styles.TwoFieldsLine}>
                <Field
                    placeholder={'Пол'}
                    name={'sex'}
                    component={Select}
                    validate={[]}
                    className={styles.ShortField}
                />
                <div></div>
                <Field
                    placeholder={'Дата рождения'}
                    name={'dataBirth'}
                    component={Input}
                    validate={[required, birthDate]}
                    className={styles.ShortField + " " + styles.secondColumn}
                />

            </div>
            <div className={styles.TwoFieldsLine}>
                <Field
                    placeholder={'Мобильный телефон'}
                    name={'mobilePhoneNumber'}
                    component={Input}
                    validate={[required, phoneNumber, minLength(11), maxLength(12)]}
                    className={styles.ShortField}
                />
                <div></div>
                <Field
                    placeholder={'Email (необязательно)'}
                    name={'email'}
                    component={Input}
                    validate={[email]}
                    className={styles.ShortField + " " + styles.secondColumn + " " + styles.notNeeded}
                    value={""}
                />
            </div>
            <div>
                <Field
                    placeholder={'Адрес постоянной регистрации'}
                    name={'address'}
                    component={Input}
                    validate={[]}
                    className={styles.LongField}
                />
            </div>
            <div>
                <Field
                    placeholder={'Название работодателя'}
                    name={'employer'}
                    component={Input}
                    validate={[]}
                    className={styles.LongField}
                />
            </div>
            <div>
                <button className={styles.button}>СОХРАНИТЬ</button>
            </div>
        </form>
    );
};

const InfoReduxForm = reduxForm({
    form: "info",
})(InfoForm);

const Info = (props) => {
    const onSubmit = (formData) => {
        alert('Форма валидна, отправляется запрос')
    }
    return (
        <>
            <h1>Информация о сотруднике</h1>
            <InfoReduxForm onSubmit={onSubmit}/>
        </>
    );
};

export default Info;
