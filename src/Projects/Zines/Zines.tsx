import "./Zines.css"
import { Buffer } from "../../Misc/Misc"

const range = (start: number, end: number): Array<number> => {
    return Array.from({ length: end - start }, (_, index) => start + index);
}

export const Zines = () => {
    const imagePathsSlappy = range(1, 19).map(num => `./assets/slappy/${num}.png`)
    const imagePathsSlant = range(1, 17).map(num => `./assets/slant/${num}.png`)
    return <>
        <div>2023</div>
        <div>poetry chapbooks, published as a diptych.</div>
        <Buffer />
        <div className="subtext">{`slappy --> `}</div>
        <Zine imagePaths={imagePathsSlappy} />
        <Buffer />
        <div className="subtext">{`and slant --> `}</div>
        <Zine imagePaths={imagePathsSlant} />
    </>
}

const Zine = ({ imagePaths }: { imagePaths: Array<string> }) => {
    return <>
        <div className="background">
            <section className="card">
                {imagePaths.map((path, index) => (
                    <div className="card--content"><img className="card--image" key={index} src={require(`${path}`)} alt={`image-${index}`} /></div>
                ))}
            </section>
        </div>
    </>
}
