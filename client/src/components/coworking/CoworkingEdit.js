import React from 'react'
import { Edit } from 'react-admin'
import CoworkingEntity from "./CoworkingEntity";

const CoworkingEdit = (props) => {
    return (
        <Edit title='Edit Coworking' {...props}>
            <CoworkingEntity isEditMode={true}/>
        </Edit>
    );
}

export default CoworkingEdit
