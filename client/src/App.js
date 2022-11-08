import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import PlaceIcon from '@mui/icons-material/Place';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import BusinessIcon from '@mui/icons-material/Business';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MapIcon from '@mui/icons-material/Map';

import CityList from "./components/city/CityList";
import CityCreate from "./components/city/CityCreate";
import CityEdit from "./components/city/CityEdit";
import LocationList from "./components/location/LocationList";
import LocationCreate from "./components/location/LocationCreate";
import LocationEdit from "./components/location/LocationEdit";
import CoworkingList from "./components/coworking/CoworkingList";
import CoworkingCreate from "./components/coworking/CoworkingCreate";
import CoworkingEdit from "./components/coworking/CoworkingEdit";

const dataProvider = simpleRestProvider('http://localhost:3000');

const myDataProvider = {
    ...dataProvider,
    update: (resource, params) => {
        if (resource !== 'locations') {
            // fallback to the default implementation
            return dataProvider.update(resource, params);
        }

        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */

        // Freshly dropped pictures are File objects and must be converted to base64 strings
        const newPictures = params.data.pictures.filter(
            p => p.rawFile instanceof File
        );
        const formerPictures = params.data.pictures.filter(
            p => !(p.rawFile instanceof File)
        );
        console.log("NEWPIC:", newPictures);
        console.log("FORMERPIC:", formerPictures);

        return Promise.all(newPictures.map(convertFileToBase64))
            .then(base64Pictures =>
                base64Pictures.map(picture64 => ({
                    src: picture64,
                    title: `${params.data.title}`,
                }))
            )
            .then(transformedNewPictures =>
                dataProvider.update(resource, {
                    id: params.data.id,
                    data: {
                        ...params.data,
                        pictures: [
                            ...transformedNewPictures,
                            ...formerPictures,
                        ],
                    },
                })
            );
    },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });

function App() {
    return (
        <div style={{width: '90%'}}>
        <Admin dataProvider={myDataProvider}>
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
                name='coworkings' icon={BusinessIcon} options={{ label: 'Coworking Space' }}
                list={CoworkingList}
                create={CoworkingCreate}
                edit={CoworkingEdit}
            />
        </Admin>
        </div>
    );
}

export default App;
