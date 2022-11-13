import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    useListContext,
    ReferenceField, RichTextField, FunctionField, useDelete, useNotify
} from 'react-admin'
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import {Link} from "react-router-dom";
import WifiIcon from "@mui/icons-material/Wifi";
import TvIcon from "@mui/icons-material/Tv";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import KitchenIcon from "@mui/icons-material/Kitchen";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import {Grid} from "@material-ui/core";

const cardStyle = {
    margin: '0.5em',
    verticalAlign: 'top'
};

const DeleteButton = (props) => {
    const [deleteOne, { isLoading, error }] = useDelete();
    const notify = useNotify();

    const handleClick = () => {
        deleteOne(
            'orders',
            { id: props.curRecord.id , previousData: props.curRecord },
            {
                onSuccess: (data) => {
                    notify(`Reservation order has been deleted`, { autoHideDuration: 5000 });
                },
                onError: (error) => {
                    notify(`delete error: ${error.message}`, { type: 'warning' });
                },
            }
        );
    }
    if (error) { return <p>ERROR</p>; }
    return <button disabled={isLoading} onClick={handleClick}>{props.label}</button>;
};

const MessageField = (props) => {
    if (typeof props.curRecord.message === 'undefined') {
        return 'Your message is empty';
    } else {
        return <>Your message: <br/><RichTextField record={props.curRecord} source="message" /></>;
    }
};

const OrderCardGrid = () => {
    const { data } = useListContext();
    // Workaround for bug with undefined data
    if (typeof data === 'undefined') {
        return (<Datagrid/>);
    }

    return (
        <>
            {data.map(record =>
                <Card key={record.id} style={cardStyle}>

                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <ReferenceField record={record} source="coworkings_id" reference="coworkings" link={false}>
                                    <FunctionField render={refRecord => <CardMedia record={refRecord} component="img" image={refRecord.pictures[0].src}/>}/>
                                </ReferenceField>
                            </Grid>
                            <Grid item xs={6}>
                                <CardActionArea to={`/coworkings/${record.coworkings_id}/show`} component={Link}>
                                <CardContent>
                                    Coworking Title:&nbsp;
                                    <ReferenceField label="Coworking" record={record} source="coworkings_id" reference="coworkings" link={false}>
                                        <TextField source="title" />
                                    </ReferenceField>
                                </CardContent>
                                <CardContent>
                                    Date: <TextField record={record} source="date" />&nbsp;
                                    Number of seats: <TextField record={record} source="number_seats" />
                                </CardContent>
                                <CardContent>
                                    Facilities: <WifiIcon/>&nbsp;<TvIcon/>&nbsp;<MeetingRoomIcon/>&nbsp;<RestaurantIcon/>&nbsp;<KitchenIcon/>&nbsp;<MicrowaveIcon/>
                                </CardContent>
                                </CardActionArea>
                            </Grid>
                            <Grid item xs={3}>
                                <CardContent>
                                    <MessageField curRecord={record} />
                                    <br/><br/><DeleteButton curRecord={record} label="Delete Order" />
                                </CardContent>
                            </Grid>
                        </Grid>

                </Card>
            )}
        </>
    );
};

const OrderList = (props) => {

    return (
        <List {...props} actions={false}>
            <OrderCardGrid/>
        </List>
    )
}

export default OrderList
