import React from 'react';
import {SimpleForm, TextInput} from "react-admin";

const CityEntity = (props) => {

    return (
        <SimpleForm>
            <TextInput source='id' />
            <TextInput source='name' required style={{width: '50%'}} />
        </SimpleForm>
    );
};

export default CityEntity;