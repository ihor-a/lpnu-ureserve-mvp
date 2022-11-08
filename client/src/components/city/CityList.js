import React from 'react'
import {List, Datagrid, TextField, EditButton, SearchInput} from 'react-admin'

const CityList = (props) => {

    const cityFilters = [
        <SearchInput source="name" alwaysOn />,
    ];

    return (
        <List {...props} filters={cityFilters}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <EditButton basePath='/cities' />
            </Datagrid>
        </List>
    )
}

export default CityList
