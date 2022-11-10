import React from 'react';
import {Button, useCreate, useNotify} from "react-admin";

/**
 * Example of handling click event with record creation
 * @returns {JSX.Element}
 * @constructor
 */
const OrderButton = () => {
    const orderData = {
        user_name: 'User1',
        message: 'Hello'
    };
    const [create, { isLoading, error }] = useCreate();
    const notify = useNotify();

    const handleClick = () => {
        console.log(create);
        create(
            'orders',
            { data: orderData },
            {
                onSuccess: (data) => {
                    notify(`Reservation order has been created for user ${data.user_name}`, { autoHideDuration: 5000 });
                },
                onError: (error) => {
                    notify(`Reservation error: ${error.message}`, { type: 'warning' });
                },
            }
        );
    }

    if (error) { return <p>ERROR</p>; }
    return <Button variant="contained" disabled={isLoading} onClick={handleClick}>Order</Button>;
};


export default OrderButton;