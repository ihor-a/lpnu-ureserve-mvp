import React from 'react';
import {SimpleForm, TextInput, SelectInput, ReferenceInput, ImageInput, ImageField, required} from "react-admin";
import {RichTextInput} from "ra-input-rich-text";

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
            <RichTextInput source='description' validate={required()} />
            <ImageInput source="pictures" required label="Coworking Picture" multiple={true}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    );
};

export default CoworkingEntity;