import { forward, loop, play, previous, random , barra} from "../barrels/assets";

const MusicPlayer = () =>{

    return /* html */`
        <div id="reproductor">
            <div class="controles">
                <img src="${random}" alt="" class="control-btn" />
                <img src="${previous}" alt="" class="control-btn" />
                
                <button class="play-btn">
                    <img src="${play}" alt="" class="control-btn" />
                </button>

                <img src="${forward}" alt="" class="control-btn" />
                <img src="${loop}" alt="" class="control-btn" />
            </div>
            <img src="${barra}" id="control-barra">
        </div>
    `
}

export default MusicPlayer;