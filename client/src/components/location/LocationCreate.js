import React from 'react'
import { Create } from 'react-admin'
import LocationEntity from "./LocationEntity";

const LocationCreate = (props) => {
    return (
        <Create title='Create Location' {...props}>
            <LocationEntity isEditMode={false}/>
        </Create>
    )
}

export default LocationCreate
