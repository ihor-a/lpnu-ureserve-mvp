import React from 'react'
import {List, Datagrid, TextField, EditButton, SearchInput, UrlField} from 'react-admin'

const CityList = (props) => {

    const cityFilters = [
        <SearchInput source="name" alwaysOn />,
    ];

    return (
        <List {...props} filters={cityFilters}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <UrlField source="name" />
                <EditButton basePath='/cities' />
            </Datagrid>
        </List>
    )
}

export default CityList
