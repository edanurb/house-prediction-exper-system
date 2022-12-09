import axios from './axios'
import denemeJson from "../deneme.json"
import {toast} from "react-toastify";

const SAVE_JSON_URL ="/api/json/save"
export async function sendJsonToServer() {

    console.log(JSON.stringify(denemeJson))
    return await axios
        .post(
            SAVE_JSON_URL,
            JSON.stringify(denemeJson),
            {
                headers: {
                    "Content-Type": "application/json"
                },
            }
        ).then(() => { toast.success("Success Save") });
}
