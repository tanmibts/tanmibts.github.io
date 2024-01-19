import { Wood } from "./Wood/Wood"
import { Zines } from "./Zines/Zines"
import { BookRecs } from "./BookRecs/BookRecs"
import { Dots } from "../Misc/Misc"

export const Projects = () => {
    return <div>
        <Wood />
        <Dots />
        <Zines />
        <Dots />
        <BookRecs />
    </div>
}
