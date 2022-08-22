import { useEffect, useState } from "react";
import { getMap, getCover } from "../util/BeatSaverUtils";
import "./styles/Map.scss";
import "../App.scss";
import { BeatSaver } from "../types/BeatSaver";
import userEvent from "@testing-library/user-event";

export function Map() { 

    const [cover, setCover] = useState<BeatSaver>();

    const [val, setVal] = useState<BeatSaver>();

    const getData = async () => {
        const result = await getMap("custom_level_52570cf0e132c46ec33156507dd703a02b817510");
        setVal(result);
    }

    useEffect(() => {
        getData();
    });

    const getBeatmapCover = async () => {
        const result = await getCover(val?.downloadURL)
        setCover(result);
    }

    useEffect(() => {
        getBeatmapCover();
    });

    return (
        <div className="main">
            <div className="song-card rounded-corners">
                <div className="inner rounded-corners">
                    <div className="song-card-img">
                        <img src={cover} alt="fallen symphony" />
                    </div> 
                    <div>
                        <div className="stay">{ val?.metadata.songName }
                            <div className="subname">{val?.metadata.songSubName}</div>
                        </div>
                    </div>
                    <div>
                        BPM: { val?.metadata.bpm}
                    </div>
                    <div>
                        NPS: { val?.versions[0].diffs[0].nps }
                    </div>
                    <div>
                        Artist: { val?.metadata.songAuthorName }
                    </div>
                    <div className="inner">
                        Mapper: { val?.metadata.levelAuthorName }
                    </div>
                    <div>
                        !bsr: { val?.id }
                    </div>
                </div>
            </div>            
        </div>
    );
}