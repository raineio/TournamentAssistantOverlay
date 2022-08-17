import { getMap } from "../util/BeatSaverUtils";
import "./Map.scss"

export function Map() { 
    return (
        <div className="main">
            <div className="card">
                { getMap("52570CF0E132C46EC33156507DD703A02B817510"); }
            </div>
        </div>
    )
}