import React, { useState } from "react";
import styles from './FormsControls.module.css';
// import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-date-picker';
//import Calendar from 'react-input-calendar'

const FormControl = ({ input, meta: {touched, error}, className, children, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : null)}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Input = (props) => {
    const { input, meta, child, className, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} className={className + " " + styles.input} />
        </FormControl>
    );
};

export const Select = (props) => {
    const { input, meta, child, className, ...restProps} = props;
    return (
      <FormControl {...props}>
          <select className={className}>
              <option>Мужской</option>
              <option>Женский</option>
          </select>
      </FormControl>
    );
}

// export const DateCalendar = (props) => {
//     const [value, setDate] = useState(new Date());
//     const { input, meta, child, className, ...restProps} = props;
//     const onChange = (date, value) => {
//         setDate(date)
//         console.log('Date: ', date)
//     }
//
//     return (
//         <FormControl {...props}>
//             <DatePicker
//                 { ...input }
//                 { ...restProps }
//                 onChange={onChange}
//                 value={value}
//                 clearIcon={null}
//                 className={className + " " + styles.DatePicker}
//                 closeCalendar={true}
//             />
//         </FormControl>
//     );
// }