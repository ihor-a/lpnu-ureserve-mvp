import React from 'react';
import {SimpleForm, TextInput, SelectInput, ReferenceInput, ImageInput, ImageField, required} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

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
            <RichTextInput source='description' validate={required()} />
            <ImageInput source="pictures" label="Location Picture" multiple={true}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    );
};

export default LocationEntity;