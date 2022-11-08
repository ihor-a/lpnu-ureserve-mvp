import React from 'react'
import { Create } from 'react-admin'
import CityEntity from "./CityEntity";

const CityCreate = (props) => {
    return (
        <Create title='Create City' {...props}>
            <CityEntity isEditMode={false}/>
        </Create>
    )
}

export default CityCreate
