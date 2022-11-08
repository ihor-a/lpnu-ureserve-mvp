import React from 'react'
import {useGetList, List, Datagrid, TextField, SelectField, ImageField, EditButton, SearchInput} from 'react-admin'

const LocationList = (props) => {
    const { data } = useGetList('cities');

    const locationFilters = [
        <SearchInput source="title" alwaysOn />,
        // <SelectInput source="cities_id" choices={data} alwaysOn />
    ];

    return (
        <List {...props} filters={locationFilters}>
            <Datagrid>
                <TextField source='id' />
                <ImageField source="pictures" src="src" title="title" style={{width: '10%'}}/>
                <TextField source='title' />
                <SelectField source="cities_id" choices={data}/>
                <TextField source='address' />
                <EditButton basePath='/locations' />
                {/*<DeleteButton basePath='/locations' />*/}
            </Datagrid>
        </List>
    )
}

export default LocationList
