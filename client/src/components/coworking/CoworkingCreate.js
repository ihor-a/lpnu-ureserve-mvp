import React from 'react'
import { Create } from 'react-admin'
import CoworkingEntity from "./CoworkingEntity";

const CoworkingCreate = (props) => {
    return (
        <Create title='Create Coworking' {...props}>
            <CoworkingEntity isEditMode={false}/>
        </Create>
    )
}

export default CoworkingCreate
