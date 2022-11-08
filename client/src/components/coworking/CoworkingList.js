import React from 'react'
import {useGetList, List, Datagrid, TextField, SelectField, ImageField, EditButton, SearchInput} from 'react-admin'

const CoworkingList = (props) => {
    const { data } = useGetList('locations');

    const coworkingFilters = [
        <SearchInput source="title" alwaysOn />,
        // <SelectInput source="locations_id" choices={data} optionText='title' alwaysOn />
    ];

    return (
        <List {...props} filters={coworkingFilters}>
            <Datagrid>
                <TextField source='id' />
                <ImageField source="pictures" src="src" title="title" />
                <SelectField source="locations_id" choices={data} optionText="title"/>
                <TextField source='title' />
                <TextField source='price' />
                <EditButton basePath='/coworkings' />
            </Datagrid>
        </List>
    )
}

export default CoworkingList
