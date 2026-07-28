import { WoodFolder } from "./Wood/WoodFolder";
import { ZinesFolder } from "./Zines/ZinesFolder";
import { BookRecsFolder } from "./BookRecs/BookRecsFolder";
import { PhotoBlogFolder } from "./PhotoBlog/PhotoBlogFolder";
import { Dots } from "../Misc/Misc";

export const Projects = () => {
    return <div>
        <WoodFolder />
        <Dots />
        <ZinesFolder />
        <Dots />
        <BookRecsFolder />
        <Dots />
        <PhotoBlogFolder />
    </div>
}
