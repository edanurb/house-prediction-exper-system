import axios from './axios'
import {toast} from "react-toastify";

const RECEIVE_QUERY_URL = "/api/query/receiveQuery"

export async function sendQuery(queryObject) {

    let queryRequest = {
        bathroomNumber: queryObject.banyo,
        west: queryObject.bati,
        east: queryObject.dogu,
        south: queryObject.guney,
        north: queryObject.kuzey,
        neighbourhood: queryObject.ilce,
        isFurnished: queryObject.esya,
        floor: queryObject.kat,
        meterSquare: queryObject.metrekare,
        totalRoomNumber: queryObject.toplam_oda,
        age: queryObject.yas,
        district:queryObject.semt,
        distanceOfMetro: queryObject.distanceOfMetro,
        distanceOfMarket: queryObject.distanceOfMarket,
        inSite:queryObject.inSite,
        hasView:queryObject.hasView,
        hasGarage: queryObject.hasGarage,
        hasBuiltInKitchen: queryObject.hasBuiltInKitchen,
        hasSteelDoor: queryObject.hasSteelDoor,
        isRenovated: queryObject.isRenovated,
        hasPool: queryObject.hasPool,
        hasGym: queryObject.hasGym

    }
    console.log(JSON.stringify(queryRequest))
    axios.post(RECEIVE_QUERY_URL, JSON.stringify(queryRequest), {

        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {


            toast.success(response.data.message);
        }).catch(() => {
            toast.error("Error Occured")

        }
    );
}
