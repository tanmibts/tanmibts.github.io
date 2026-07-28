import { Buffer } from "../../Misc/Misc";

export const BookRecs = () => {
    return <>
        {/* Consider for the future: I like how this displays the books: https://degrowthcalifornia.org/publications/ */}
        <div className="margin-xy">
            <div>
                here are some books that have shaped how I thinkfeel:
            </div>
            <div className="subtext">- <b>jason hickel</b> less is more: how degrowth will save the world</div>
            <div className="subtext">- <b>anna tsing</b> the mushroom at the end of the world: on the possibility of life in capitalist ruins</div>
            <div className="subtext">- <b>robin wall kimmerer</b> braiding sweetgrass: indigenous wisdom, scientific knowledge, and the teachings of plants</div>
            <div className="subtext">- <b>abraham joshua heschel</b> the sabbath: its meaning for modern man</div>
            <div className="subtext">- <b>grace lee boggs</b> the next american revolution: sustainable activism for the twenty-first century</div>
            <div className="subtext">- <b>david r. montgomery</b> dirt: the erosion of civilizations</div>
        </div >
        <Buffer />
        <Buffer />
        <div className="margin-xy">
            <div>and here are some books that have shaped how I feelthink:</div>
            <div className="subtext">- <b>john berger</b> and our faces, my heart, brief as photos</div>
            <div className="subtext">- <b>leone ross</b> come let us sing anyway</div>
            <div className="subtext">- <b>frank o'hara</b> lunch poems</div>
            <div className="subtext">- <b>forrest gander</b> be with</div>
            <div className="subtext">- <b>jenny zhang</b> my baby first birthday</div>
        </div>

    </>;
}
