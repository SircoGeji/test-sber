import { stopSubmit } from "redux-form";

const VALID_INFO_DATA = "VALID_INFO_DATA";

let initialState = {
    surname: null,
    name: null,
    patronymic: null,
    sex: null,
    birthDate: null,
    phoneNumber: null,
    email: null,
    address: null,
    employer: null
};

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case VALID_INFO_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const checkValidInfoData = () => ({
    type: VALID_INFO_DATA,
    payload: {},
});


export default infoReducer