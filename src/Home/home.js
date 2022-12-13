import SpecialRadioGroup from "./SpecialRadioGroup";
import NumberText from "./NumberText";
import SpecialCheckBox from "./SpecialCheckBox";
import Button from "@mui/material/Button";
import {useState} from "react";
import Box from '@mui/material/Box';
import {sendQuery} from "../api/QueryApi";
import SelectBox from "./SelectBox"
import TextBox from "./TextBox"
import {createTheme} from "@mui/material";

export default function Home() {

    const ilceValues = ['Çankaya', 'Keçiören', 'Mamak', 'Etimesgut', 'Yenimahalle', 'Altındağ','Gölbaşı', 'Sincan', 'Polatlı', 'Çubuk', 'Pursaklar']
    const esyaDurumu = ["Eşyalı", "Eşyasız"]
    const cephe = ["Kuzey", "Guney", "Dogu", "Bati"]
    const floorArr=['Ara Kat', 'Giriş/Zemin', 'Kot/Bodrum', 'En Üst Kat', '21 ve üzeri'];

    const [roomNumber, setRoomNumber] = useState(0);
    const [netMetersquare, setNetMeterSquare] = useState(0)
    const [neighbourhood, setNeighourhood] = useState("")
    const [floor, setFloor] = useState(0)
    const [age, setAge] = useState(0)
    const [bathroomNumber, setBathroomNumber] = useState(0)
    const [isFurnished, setIsFurnished] = useState(false)
    const [front, setFront] = useState([]) //cephe
    const[district,setDistrict]=useState("");

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
        }
        console.log(queryObject)
        sendQuery(queryObject);
    }
    return (
        <Box sx={{m:2,p:5, display: 'grid' ,gap:4,gridTemplateColumns: '1fr 1fr 1fr'}}>
            <SelectBox label="İlçe" selectValues={ilceValues} setterFunction={setNeighourhood}  neighbourhood={neighbourhood}/>
            {/*<SpecialRadioGroup label="İlçe" radioValues={ilceValues}*/}
            {/*                  />*/}
            <TextBox label="Semt" setterFunction={setDistrict} value={district}/>
            <SelectBox label="Eşya Durumu" selectValues={esyaDurumu} setterFunction={setIsFurnished}
                               isFurnished={isFurnished}/>
            <SpecialCheckBox label="Cephe" values={cephe} setterFunction={setFront} value={front}/>

            <NumberText label="Toplam Oda Sayısı" setterFunction={setRoomNumber} value={roomNumber}/>
            <NumberText label="Net Metrekare" setterFunction={setNetMeterSquare} value={netMetersquare}/>

            {/*<SpecialRadioGroup label="Bulunduğu Kat" radioValues={ilceValues} setterFunction={setFloor}*/}
            {/*                   neighbourhood={neighbourhood}/>*/}

            <SelectBox label="Bulunduğu Kat" selectValues={floorArr} setterFunction={setFloor}  floor={floor}/>
            {/*<NumberText label="Bulunduğu Kat" setterFunction={setFloor} value={floor}/>*/}
            <NumberText label="Bina Yaşı" setterFunction={setAge} value={age}/>
            <NumberText label="Banyo Sayısı" setterFunction={setBathroomNumber} value={bathroomNumber}/>
            {/*<SelectBox label="İlçe" selectValues={ilceValues} setterFunction={setNeighourhood}  neighbourhood={neighbourhood}/>*/}


            <Button onClick={() => {
                query()
            }}>Sorgula</Button>
                <br/>

        </Box>
    );
}