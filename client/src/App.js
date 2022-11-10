import { Admin, Resource } from 'react-admin'
// import { Route } from "react-router-dom";
import UploadPictureDataProvider from "./components/UploadPictureDataProvider";
import PlaceIcon from '@mui/icons-material/Place';
import BusinessIcon from '@mui/icons-material/Business';
import MapIcon from '@mui/icons-material/Map';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
// import BookOnlineIcon from '@mui/icons-material/BookOnline';
// import ListAltIcon from '@mui/icons-material/ListAlt';

import CityList from "./components/city/CityList";
import CityCreate from "./components/city/CityCreate";
import CityEdit from "./components/city/CityEdit";
import LocationList from "./components/location/LocationList";
import LocationCreate from "./components/location/LocationCreate";
import LocationEdit from "./components/location/LocationEdit";
import CoworkingList from "./components/coworking/CoworkingList";
import CoworkingCreate from "./components/coworking/CoworkingCreate";
import CoworkingEdit from "./components/coworking/CoworkingEdit";
import CoworkingShow from "./components/coworking/CoworkingShow";
// import CoworkingReserve from "./components/coworking/CoworkingReserve";

function App() {
    return (
        <div style={{width: '90%'}}>
        <Admin dataProvider={UploadPictureDataProvider}>
            <Resource
                name='cities' icon={MapIcon}
                list={CityList}
                create={CityCreate}
                edit={CityEdit}
            />
            <Resource
                name='locations' icon={PlaceIcon}
                list={LocationList}
                create={LocationCreate}
                edit={LocationEdit}
            />
            <Resource
                name='coworkings' icon={BusinessIcon} options={{ label: 'Manage Coworking' }}
                list={CoworkingList}
                create={CoworkingCreate}
                edit={CoworkingEdit}
                show={CoworkingShow}
            />
            {/*<CustomRoutes>*/}
            {/*    <Route path="/coworkingreserve" element={<CoworkingReserve />} />*/}
            {/*</CustomRoutes>*/}
        </Admin>
        </div>
    );
}

export default App;
