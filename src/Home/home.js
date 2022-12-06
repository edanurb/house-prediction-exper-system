import SpecialRadioGroup from "./SpecialRadioGroup";
import NumberText from "./NumberText";
import SpecialCheckBox from "./SpecialCheckBox";
import { useState } from "react";
export default function Home(){
    const ilceValues=["Çankaya","Güdül"]
    const esyaDurumu=["Eşyalı","Eşyasız"]
    const cephe=["Kuzey","Güney","Doğu","Batı"]
    // const [output,setOutput]=useState({
    //     ""
    // })

    return(
        <div>
        <SpecialRadioGroup label="İlçe" radioValues={ilceValues}/>
        <NumberText label="Toplam Oda Sayısı"/>
        <NumberText label="Net Metrekare"/>
        <NumberText label="Bulunduğu Kat"/>
        <NumberText label="Bina Yaşı"/>
        <NumberText label="Banyo Sayısı"/>
        <SpecialRadioGroup label="Eşya Durumu" radioValues={esyaDurumu}/>
        <SpecialCheckBox label="Cpehe"values={cephe}/>
        </div>
    );
}