import SpecialRadioGroup from "./SpecialRadioGroup";
import NumberText from "./NumberText";
import SpecialCheckBox from "./SpecialCheckBox";
import Button from "@mui/material/Button";
import {useState} from "react";
import Box from '@mui/material/Box';
import {sendQuery} from "../api/QueryApi";
import SelectBox from "./SelectBox"
import TextBox from "./TextBox"
import MultipleSelectInput from "./MultipleSelectInput";
import {createTheme} from "@mui/material";

export default function Home() {

    const ilceValues = ['Çankaya', 'Keçiören', 'Mamak', 'Etimesgut', 'Yenimahalle', 'Altındağ','Gölbaşı', 'Sincan', 'Polatlı', 'Çubuk', 'Pursaklar']
    const esyaDurumu = ["Eşyalı", "Eşyasız"]
    const cephe = ["Kuzey", "Guney", "Dogu", "Bati"]
    const floorArr=['Ara Kat', 'Giriş/Zemin', 'Kot/Bodrum', 'En Üst Kat', '21 ve üzeri'];
    const additionalFeaturesValues=["Site İçersinde","Manzaralı","Otopark Var","Ankastre Mutfaklı","Çelik Kapılı","Tadilat Yapılmış","Havuz Var","Spor Salonu Var",
    "Şöminesi Var","Güvenlik Var","Yeşil Alanları Var",
        "Açık Yaşam Alanı Var","Balkonlu","Şarap Mahzeni Var",
    "Sinema Odası var","Yüksek Tavanlı","Asansörlü","Jakuzi Var" ,
        "Sauna Var","Sahile Yakın","Klima Var","Akıllı Ev Sistemi Var",
    "Ses Yalıtımlı","Isı Yalıtımlı","Merkezi Isıtma Var",
        "Internet Altyapısı Var","Giyinme Odası Var",
    "Kapıcı Var","Çocuk Parkı Var","Depreme Dayanıklı",
        "Yürüme Yolu Var"]
    const heatingTypes=   ['Kombi', 'Merkezi', 'Yerden Isıtma', 'Soba']


    const [roomNumber, setRoomNumber] = useState(0);
    const [netMetersquare, setNetMeterSquare] = useState(0)
    const [neighbourhood, setNeighourhood] = useState("")
    const [floor, setFloor] = useState(0)
    const [age, setAge] = useState(0)
    const [bathroomNumber, setBathroomNumber] = useState(0)
    const [isFurnished, setIsFurnished] = useState(false)
    const [front, setFront] = useState([]) //cephe
    const [additionalFeatures,setAdditionalFeatures]=useState([])
    const[district,setDistrict]=useState("");
    const [distanceOfMetro,setDistanceOfMetro]=useState(0)
    const [distanceOfMarket,setDistanceOfMarket]=useState(0)
    const [distanceOfRestaurants,setDistanceOfRestaurants]=useState(0)
    const [distanceOfBusStation,setDistanceOfBusStation]=useState(0)
    const [distanceOfHospital,setDistanceOfHospital]=useState(0)
    const [distanceOfAVM,setDistanceOfAVM]=useState(0)
    const [distanceOfSchool,setDistanceOfSchool]=useState(0)
    const[heatingType,setHeatingType]=useState("")
    const [result,setResult]=useState(0);
    function query() {

        let queryObject = {
            ilce: neighbourhood,
            semt:district,
            toplam_oda: parseInt(roomNumber) ,
            metrekare: parseInt(netMetersquare),
            kat: floor,
            yas: parseInt(age),
            banyo: parseInt(bathroomNumber),
            esya: isFurnished,
            kuzey : front.includes("Kuzey"),
            guney : front.includes("Guney"),
            dogu: front.includes("Dogu"),
            bati:front.includes("Bati"),
            distanceOfMetro:parseInt(distanceOfMetro),
            distanceOfMarket:parseInt(distanceOfMarket),
            inSite:additionalFeatures.includes("Site İçersinde"),
            hasView:additionalFeatures.includes("Manzaralı"),
            hasGarage:additionalFeatures.includes("Otopark Var"),
            hasBuiltInKitchen:additionalFeatures.includes("Ankastre Mutfaklı"),
            hasSteelDoor:additionalFeatures.includes("Çelik Kapılı"),
            isRenovated:additionalFeatures.includes("Tadilat Yapılmış"),
            hasPool:additionalFeatures.includes("Havuz Var"),
            hasGym:additionalFeatures.includes("Spor Salonu Var"),
            hasFirePlace:additionalFeatures.includes("Şöminesi Var"),
            hasSecurity:additionalFeatures.includes("Güvenlik Var"),
            hasGreenFeatures:additionalFeatures.includes("Yeşil Alanları Var"),
            hasOutdoorLivingSpace:additionalFeatures.includes("Açık Yaşam Alanı Var"),
            hasBalcony:additionalFeatures.includes("Balkonlu"),
            hasWineCellar:additionalFeatures.includes("Şarap Mahzeni Var"),
            hasHomeTheatre:additionalFeatures.includes("Sinema Odası var"),
            hasHighCeiling:additionalFeatures.includes("Yüksek Tavanlı"),
            hasElevator:additionalFeatures.includes("Asansörlü"),
            hasJacuzzi:additionalFeatures.includes("Jakuzi Var"),
            hasSauna:additionalFeatures.includes("Sauna Var"),
            isNearBeach:additionalFeatures.includes("Sahile Yakın"),
            hasAirConditioning:additionalFeatures.includes("Klima Var"),
            hasSmartHomeAutomation:additionalFeatures.includes("Akıllı Ev Sistemi Var"),
            isSoundProof:additionalFeatures.includes("Ses Yalıtımlı"),
            isHeatProof:additionalFeatures.includes("Isı Yalıtımlı"),
            hasCentralAirConditioning:additionalFeatures.includes("Merkezi Isıtma Var"),
            hasInternetInfrastructure:additionalFeatures.includes("Internet Altyapısı Var"),
            hasDressingRoom:additionalFeatures.includes("Giyinme Odası Var"),
            hasDoorman:additionalFeatures.includes("Kapıcı Var"),
            hasChildPark:additionalFeatures.includes("Çocuk Parkı Var"),
            isEarthquakeResistant:additionalFeatures.includes("Depreme Dayanıklı"),
            hasWalkingPath:additionalFeatures.includes("Yürüme Yolu Var")  ,
            distanceOfRestaurants:parseInt(distanceOfRestaurants),
            distanceOfBusStation :parseInt(distanceOfBusStation),
            distanceOfHospital   :parseInt(distanceOfHospital),
            distanceOfAVM        :parseInt(distanceOfAVM),
            distanceOfSchool     :parseInt(distanceOfSchool)             ,
            heatingType:heatingType
        }
        sendQuery(queryObject).then( (response) => {
            setResult(response)
            console.log("response"+ response)
        });
    }
    return (
        <Box sx={{m:2,p:5}}>
            <Box sx={{ display: 'grid' ,gap:4,gridTemplateColumns: '1fr 1fr'}}>
                <SelectBox label="İlçe" selectValues={ilceValues.sort()} setterFunction={setNeighourhood}  neighbourhood={neighbourhood}/>

                <TextBox label="Semt" setterFunction={setDistrict} value={district}/>
                <SelectBox label="Eşya Durumu" selectValues={esyaDurumu} setterFunction={setIsFurnished}
                                   isFurnished={isFurnished}/>
                <SelectBox label="Isınma Tipi" selectValues={heatingTypes.sort()} setterFunction={setHeatingType}  neighbourhood={heatingType}/>
                <MultipleSelectInput label="Cephe" values={cephe} setterFunction={setFront} value={front}/>

                <NumberText label="Toplam Oda Sayısı" setterFunction={setRoomNumber} value={roomNumber}/>
                <NumberText label="Net Metrekare" setterFunction={setNetMeterSquare} value={netMetersquare}/>



                <SelectBox label="Bulunduğu Kat" selectValues={floorArr} setterFunction={setFloor}  floor={floor}/>
                {/*<NumberText label="Bulunduğu Kat" setterFunction={setFloor} value={floor}/>*/}
                <NumberText label="Bina Yaşı" setterFunction={setAge} value={age}/>
                <NumberText label="Banyo Sayısı" setterFunction={setBathroomNumber} value={bathroomNumber}/>
            </Box>

            <Box sx={{ mt:4,display: 'grid' ,gap:4,gridTemplateColumns: '1fr'}}>
            <h3>Ek Özellikler</h3>
            <MultipleSelectInput label="Ek özellikler" values={additionalFeaturesValues.sort()} setterFunction={setAdditionalFeatures} value={additionalFeatures}/>

            <NumberText label="Metroya Olan Uzaklık(metre)" setterFunction={setDistanceOfMetro} value={distanceOfMetro}/>
            <NumberText label="Markete Olan Uzaklık(metre)" setterFunction={setDistanceOfMarket} value={distanceOfMarket}/>
            <NumberText label="Restorantlara Olan Uzaklık(metre)" setterFunction={setDistanceOfRestaurants} value={distanceOfRestaurants}/>
            <NumberText label="Otobüs Duraklarına Olan Uzaklık(metre)" setterFunction={setDistanceOfBusStation} value={distanceOfBusStation}/>
            <NumberText label="Hastane Olan Uzaklık(metre)" setterFunction={setDistanceOfHospital} value={distanceOfHospital}/>
            <NumberText label="AVM ye Olan Uzaklık(metre)" setterFunction={setDistanceOfAVM} value={distanceOfAVM}/>
            <NumberText label="Okula Olan Uzaklık(metre)" setterFunction={setDistanceOfSchool} value={distanceOfSchool}/>

            </Box>
            <Button onClick={() => {
                query()
            }} variant="contained" sx={{mt:4}}>Sorgula</Button>
                <br/>
            <h2>Result {result!==0 ? result:""}</h2>
        </Box>

    );
}