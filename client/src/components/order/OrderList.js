import React from 'react'
import {useGetList, List, Datagrid, TextField, SelectField, EditButton} from 'react-admin'

const OrderList = (props) => {
    const { data } = useGetList('coworkings');

    return (
        <List {...props}>
            <Datagrid>
                <TextField source='date' />
                <SelectField source="coworkings_id" choices={data} optionText='title' />
                <TextField source='number_seats' />
            </Datagrid>
        </List>
    )
}

export default OrderList
