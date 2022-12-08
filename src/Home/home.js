import SpecialRadioGroup from "./SpecialRadioGroup";
import NumberText from "./NumberText";
import SpecialCheckBox from "./SpecialCheckBox";
import Button from "@mui/material/Button";
import {useState} from "react";
import {sendQuery} from "../api/QueryApi";
import denemeJson from "../deneme.json"
import {sendJsonToServer} from "../api/JsonApi";

export default function Home() {

    const ilceValues = ["Cankaya", "Gudul"]
    const esyaDurumu = ["esyalı", "esyasız"]
    const cephe = ["Kuzey", "Guney", "Dogu", "Bati"]

    const [roomNumber, setRoomNumber] = useState(0);
    const [netMetersquare, setNetMeterSquare] = useState(0)
    const [neighbourhood, setNeighourhood] = useState("")
    const [floor, setFloor] = useState(0)
    const [age, setAge] = useState(0)
    const [bathroomNumber, setBathroomNumber] = useState(0)
    const [isFurnished, setIsFurnished] = useState(false)
    const [front, setFront] = useState([]) //cephe

    function query() {

        let queryObject = {
            ilce: neighbourhood,
            toplam_oda: parseInt(roomNumber) ,
            metrekare: parseInt(netMetersquare),
            kat: parseInt(floor),
            yas: parseInt(age),
            banyo: parseInt(bathroomNumber),
            esya: isFurnished,
            kuzey : front.includes("Kuzey"),
            guney : front.includes("Guney"),
            dogu: front.includes("Dogu"),
            bati:front.includes("Bati")
        }
        console.log(queryObject)
        sendQuery(queryObject);
    }

   function saveJson(){
        console.log(JSON.stringify(denemeJson))
        sendJsonToServer()
    }

    return (
        <div>
            <SpecialRadioGroup label="İlçe" radioValues={ilceValues} setterFunction={setNeighourhood}
                               neighbourhood={neighbourhood}/>
            <NumberText label="Toplam Oda Sayısı" setterFunction={setRoomNumber} value={roomNumber}/>
            <NumberText label="Net Metrekare" setterFunction={setNetMeterSquare} value={netMetersquare}/>
            <NumberText label="Bulunduğu Kat" setterFunction={setFloor} value={floor}/>
            <NumberText label="Bina Yaşı" setterFunction={setAge} value={age}/>
            <NumberText label="Banyo Sayısı" setterFunction={setBathroomNumber} value={bathroomNumber}/>
            <SpecialRadioGroup label="Eşya Durumu" radioValues={esyaDurumu} setterFunction={setIsFurnished}
                               isFurnished={isFurnished}/>
            <SpecialCheckBox label="Cephe" values={cephe} setterFunction={setFront} value={front}/>
            <Button onClick={() => {
                query()
            }}>Sorgula</Button>
                <br/>
            <Button onClick={() => {saveJson()}}>
                Save JSON!
            </Button>
        </div>
    );
}