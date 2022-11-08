import React from 'react'
import { Edit } from 'react-admin'
import CityEntity from "./CityEntity";

const CityEdit = (props) => {
    return (
        <Edit title='Edit City' {...props}>
            <CityEntity isEditMode={true}/>
        </Edit>
    );
}

export default CityEdit
