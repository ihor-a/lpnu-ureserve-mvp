import React from 'react'
import { Edit } from 'react-admin'
import LocationEntity from "./LocationEntity";

const LocationEdit = (props) => {
    return (
        <Edit title='Edit Location' {...props}>
            <LocationEntity isEditMode={true}/>
        </Edit>
    );
}

export default LocationEdit
