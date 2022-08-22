import axios from "axios";

export async function getMap(levelid: string) {
    let hash = levelid.replace("custom_level_", "");
    let uri = "https://api.beatsaver.com/maps/hash/";
    let url = uri + hash;

    const { data } = await axios(url);

    return data; 
}

export async function getCover(url: string) {
    const { data } = await axios(url);

    return data; 
}

