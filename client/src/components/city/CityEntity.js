import React from 'react';
import {SimpleForm, TextInput} from "react-admin";

const CityEntity = (props) => {
    let idField = '';
    if (props.isEditMode === true) {
        idField = <TextInput disabled source='id' />;
    }

    return (
        <SimpleForm>
            {idField}
            <TextInput source='name' required style={{width: '50%'}} />
        </SimpleForm>
    );
};

export default CityEntity;