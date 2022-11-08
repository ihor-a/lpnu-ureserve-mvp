import React from 'react';
import {SimpleForm, TextInput, SelectInput, ReferenceInput, ImageInput, ImageField} from "react-admin";

const LocationEntity = (props) => {
    let idField = '';
    if (props.isEditMode === true) {
        idField = <TextInput disabled source='id' />;
    }

    return (
        <SimpleForm>
            {idField}
            <TextInput source='title' required style={{width: '50%'}} />
            <ReferenceInput source='cities_id' reference='cities'>
                <SelectInput optionText='name' required/>
            </ReferenceInput>
            <TextInput source='address' required style={{width: '50%'}} />
            <TextInput source='description' required multiline style={{width: '50%'}} />
            <ImageInput source="pictures" label="Location Picture" multiple={true}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    );
};

export default LocationEntity;