import axios from "axios";

export async function getMap(levelid: String) {
    let hash = levelid.replace("custom_level_", "");
    let uri = "https://api.beatsaver.com/maps/hash/";
    let url = uri + hash;

    const { data } = await axios(url);

    return data; 
}

export async function getCover(levelid: String) {
    let hash = levelid.replace("custom_level_", "");
    let uri = "https://api.beatsaver.com/maps/hash/";
    let url = uri + hash + ".jpg";

    const { data } = await axios(url);

    return data; 
}

