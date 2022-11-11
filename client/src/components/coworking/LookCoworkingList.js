import React from 'react'
import { List, Datagrid, TextField, ReferenceField, SearchInput, useListContext } from 'react-admin'
import { CardMedia, Card, CardActionArea, CardContent, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MicrowaveIcon from '@mui/icons-material/Microwave';

const cardStyle = {
    width: 300,
    minHeight: 200,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const CoworkingCardGrid = () => {
    let { data } = useListContext();
    // Workaround for bug with undefined data
    if (typeof data === 'undefined') {
        return (<Datagrid/>);
    }
    return (
        <>
            {data.map(record =>
                <Card key={record.id} style={cardStyle}>
                    <CardActionArea to={`/coworkings/${record.id}/show`} component={Link}>
                        <CardMedia component="img" image={record.pictures[0].src} alt={record.pictures[0].title}/>
                        <CardHeader
                            title={<TextField record={record} source="title" />}
                            subheader={
                                <ReferenceField label="Location" record={record} source="locations_id" reference="locations" link={false}>
                                    <TextField source="title" />&nbsp;
                                    <TextField source="address" />
                                </ReferenceField>
                            }
                        />
                        <CardContent>
                            <TextField record={record} source="price" label="Price" />UAH &nbsp;
                            <WifiIcon/><TvIcon/><MeetingRoomIcon/><RestaurantIcon/><KitchenIcon/><MicrowaveIcon/>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}
        </>
    );
};

const CoworkingList = (props) => {

    const coworkingFilters = [
        <SearchInput source="title" alwaysOn />,
    ];

    return (
        <List {...props} filters={coworkingFilters} actions={false}>
            <CoworkingCardGrid/>
        </List>
    )
}

export default CoworkingList
