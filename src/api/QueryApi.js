import axios from './axios'
import {toast} from "react-toastify";
import {useState} from "react";

const RECEIVE_QUERY_URL = "/api/query/receiveQuery"

export async function sendQuery(queryObject) {
    let result;
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
        district: queryObject.semt,
        distanceOfMetro: queryObject.distanceOfMetro,
        distanceOfMarket: queryObject.distanceOfMarket,
        inSite: queryObject.inSite,
        hasView: queryObject.hasView,
        hasGarage: queryObject.hasGarage,
        hasBuiltInKitchen: queryObject.hasBuiltInKitchen,
        hasSteelDoor: queryObject.hasSteelDoor,
        isRenovated: queryObject.isRenovated,
        hasPool: queryObject.hasPool,
        hasGym: queryObject.hasGym,
        hasFirePlace              :queryObject.hasFirePlace,
        hasSecurity               :queryObject.hasSecurity,
        hasGreenFeatures          :queryObject.hasGreenFeatures,
        hasOutdoorLivingSpace     :queryObject.hasOutdoorLivingSpace,
        hasBalcony                :queryObject.hasBalcony,
        hasWineCellar             :queryObject.hasWineCellar,
        hasHomeTheatre            :queryObject.hasHomeTheatre,
        hasHighCeiling            :queryObject.hasHighCeiling,
        hasElevator               :queryObject.hasElevator,
        hasJacuzzi                :queryObject.hasJacuzzi,
        hasSauna                  :queryObject.hasSauna,
        isNearBeach               :queryObject.isNearBeach,
        hasAirConditioning        :queryObject.hasAirConditioning,
        hasSmartHomeAutomation    :queryObject.hasSmartHomeAutomation,
        isSoundProof              :queryObject.isSoundProof,
        isHeatProof               :queryObject.isHeatProof,
        hasCentralAirConditioning :queryObject.hasCentralAirConditioning,
        hasInternetInfrastructure :queryObject.hasInternetInfrastructure,
        hasDressingRoom           :queryObject.hasDressingRoom,
        hasDoorman                :queryObject.hasDoorman,
        hasChildPark              :queryObject.hasChildPark,
        isEarthquakeResistant     :queryObject.isEarthquakeResistant,
        hasWalkingPath            :queryObject.hasWalkingPath,
        distanceOfRestaurants     :queryObject.distanceOfRestaurants,
        distanceOfBusStation      :queryObject.distanceOfBusStation,
        distanceOfHospital        :queryObject.distanceOfHospital,
        distanceOfAVM             :queryObject.distanceOfAVM,
        distanceOfSchool          :queryObject.distanceOfSchool          ,
        heatingType: queryObject.heatingType

    }
    console.log(JSON.stringify(queryRequest))
    return axios.post(RECEIVE_QUERY_URL, JSON.stringify(queryRequest), {

        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            toast.success(response.data.message);
            return response.data.data;
        }).catch(() => {
                toast.error("Error Occured")
            }
        );
}
