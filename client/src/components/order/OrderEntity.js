import React from 'react';
import {TextInput, DateInput, number, minValue} from "react-admin";

const OrderEntity = () => {
    return (
        <>
            <DateInput source='date' required/>
            <TextInput source='number_seats' required validate={[number(), minValue(1)]}/>
            <TextInput source='message' multiline style={{width: '50%'}}/>
        </>
    );
};

export default OrderEntity;