import React from 'react';
import {SimpleForm, TextInput, SelectInput, ReferenceInput, ImageInput, ImageField} from "react-admin";

const CoworkingEntity = (props) => {
    let idField = '';
    if (props.isEditMode === true) {
        idField = <TextInput disabled source='id' />;
    }

    return (
        <SimpleForm>
            {idField}
            <TextInput source='title' required style={{width: '50%'}} />
            <ReferenceInput source='locations_id' reference='locations'>
                <SelectInput optionText='title' required/>
            </ReferenceInput>
            <TextInput source='price' />
            <TextInput source='description' required multiline style={{width: '50%'}} />
            <ImageInput source="pictures" label="Location Picture" multiple={true}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    );
};

export default CoworkingEntity;