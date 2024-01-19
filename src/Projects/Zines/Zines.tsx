import "./Zines.css"
import { Buffer } from "../../Misc/Misc"

const range = (start: number, end: number): Array<number> => {
    return Array.from({ length: end - start }, (_, index) => start + index);
}

export const Zines = () => {
    const imagePathsSlappy = range(1, 19).map(num => `./assets/slappy/${num}.png`)
    const imagePathsSlant = range(1, 17).map(num => `./assets/slant/${num}.png`)
    return <>
        <div>i made a poetry zine, published as a diptych:</div>
        <Buffer />
        <div>slappy</div>
        <Zine imagePaths={imagePathsSlappy} />
        <Buffer />
        <div>and slant</div>
        <Zine imagePaths={imagePathsSlant} />
    </>
}

const Zine = ({ imagePaths }: { imagePaths: Array<string> }) => {
    return <>
        <div className="background">
            <section className="card">
                {imagePaths.map((path, index) => (
                    <div className="card--content"><img key={index} src={require(`${path}`)} alt={`image-${index}`} /></div>
                ))}
            </section>
        </div>
    </>
}
