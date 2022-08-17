import { TAWebsocket } from "tournament-assistant-client";


async function getMap(levelid: String) {
    let hash = levelid.replace("custom_level_", "");
    let uri = "https://api.beatsaver.com/maps/hash/";
    let url = uri + hash;
    fetch(url);
};