import axios from './axios'
import {toast} from "react-toastify";

const SAVE_JSON_URL ="/api/json/save"
export async function sendJsonToServer(data) {

    console.log(JSON.stringify(data))
    return await axios
        .post(
            SAVE_JSON_URL,
            JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json"
                },
            }
        ).then(() => { toast.success("Success Save") });
}
