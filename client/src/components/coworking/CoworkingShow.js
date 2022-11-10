import React from 'react';
import {
    Show, SimpleShowLayout, TabbedShowLayout, Tab,
    TextField, RichTextField, NumberField,
    useGetOne, useGetRecordId, useCreate, useNotify, CreateBase, SimpleForm, TextInput, ImageField
} from 'react-admin';
import { CardMedia, Card, Rating } from '@mui/material';
import { Grid } from "@material-ui/core";
import OrderEntity from "../order/OrderEntity";

const CoworkingShow = () => {
    // Because of useRecordContext() bug we have to use record manually
    const recordId = useGetRecordId();
    const { data: curRecord } = useGetOne('coworkings', { id: recordId });
    const { data: locationRecord } = useGetOne('locations', { id: curRecord['locations_id'] });

    const notify = useNotify();
    const [create] = useCreate();
    const OrderSave = (data) => {
        data.coworkings_id = parseInt(recordId);
        create(
            'orders',
            { data },
            {
                onSuccess: (data) => {
                    notify(`Reservation order has been created on ${data.date}`, { autoHideDuration: 5000 });
                },
                onError: (error) => {
                    notify(`Reservation error: ${error.message}`, { type: 'warning' });
                },
            }
        );
    };

    return (
        <Show>
            <TabbedShowLayout>
                <Tab label="Space Description">
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <SimpleShowLayout>
                                <CardMedia
                                    component="img"
                                    image={curRecord.pictures[0].src}
                                    alt={curRecord.pictures[0].title}
                                    // sx={{ maxWidth: '42em', maxHeight: '15em' }}
                                />
                            </SimpleShowLayout>
                        </Grid>
                        <Grid item xs={6}>
                            <SimpleShowLayout>
                                <TextField source="title" />
                                <RichTextField source="description" />
                                <NumberField source="price" options={{ style: 'currency', currency: 'UAH' }} />
                            </SimpleShowLayout>
                        </Grid>
                        <Grid item xs={12}>
                            <SimpleShowLayout>
                                <h4>Order this space:</h4>

                                <CreateBase redirect={false}>
                                    <SimpleForm onSubmit={OrderSave}>
                                        <OrderEntity />
                                    </SimpleForm>
                                </CreateBase>

                            </SimpleShowLayout>
                        </Grid>
                    </Grid>
                </Tab>
                <Tab label="Location Description">
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <SimpleShowLayout>
                                <CardMedia
                                    component="img"
                                    image={locationRecord.pictures[0].src}
                                    alt={locationRecord.pictures[0].title}
                                />
                            </SimpleShowLayout>
                        </Grid>
                        <Grid item xs={6}>
                            <SimpleShowLayout>
                                <TextField source="title" record={locationRecord} />
                                <RichTextField source="description" record={locationRecord} />
                            </SimpleShowLayout>
                        </Grid>
                        <Grid item xs={12}>

                            <SimpleShowLayout>
                                <h4>Reviews about this location</h4>
                                <Card sx={{ padding: '1em' }}>Friendly staff...<br/>Nice location</Card>
                                <Card sx={{ padding: '1em' }}>Awesome location...</Card>
                                <Card sx={{ padding: '1em' }}>Friendly staff...<br/>Nice location</Card>
                                <Card sx={{ padding: '1em' }}>Tasty food...<br/>Nice location</Card>
                                <Card sx={{ padding: '1em' }}>
                                    <Rating name="location-rating" defaultValue={4.5} precision={0.5} />
                                    <SimpleForm toolbar={false}>
                                        <TextInput source='user_name' required />
                                        <TextInput source='message' multiline required style={{width: '50%'}}/>
                                    </SimpleForm>
                                </Card>
                            </SimpleShowLayout>

                        </Grid>
                    </Grid>
                </Tab>
            </TabbedShowLayout>
        </Show>
    );
};

export default CoworkingShow;