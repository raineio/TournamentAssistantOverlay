import { useEffect, useState } from "react";
import { getMap, getCover } from "../util/BeatSaverUtils";
import "./styles/Map.scss";
import "../App.scss";

export function Map() { 

    const [val, setVal] = useState();

    const getData = async () => {
        const result = await getMap("custom_level_caa4c25fac0da45260cfb09fc7cec3c621a2e215");
        setVal(result);
    }

    useEffect(() => {
        getData();
    });

    return (
        <div className="main">
            <div className="header rounded-corners">
                <div className="inner rounded-corners">
                    <div className="flex inner">
                        Song: { val?.metadata.songName } <div className="smaller">{val?.metadata.songSubName}</div>
                    </div>
                    <div className="inner">
                        Artist: { val?.metadata.songAuthorName }
                    </div>
                    <div className="inner">
                        Mapper: { val?.metadata.levelAuthorName}
                    </div>
                    <div className="inner">
                        !bsr { val?.id }
                    </div>
                </div>
            </div>            
        </div>
    );
}