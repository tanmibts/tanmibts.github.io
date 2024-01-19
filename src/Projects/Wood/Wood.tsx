import "./Wood.css";
import chair from "./assets/chair.jpg"
import chopsticksJaiveer from "./assets/chopsticks_jaiveer.png"

export const Wood = () => {
    return <div>
        <div>last year, i made a chair. the design is based on the pierre jeanneret chandigarh chair, with my modifications.</div>
        <div className="margin-xy">
            <div className="container">
                <div className="chair-pic">
                    <img src={chair} alt="chair" width={350} />
                </div>
                <div className="chair-description">
                    <div>chair (cherry frame, textile is old clothing scraps I collected from friends and wove together) </div>
                </div>
            </div>
        </div>
        <div className="margin-xy">
            <div className="container">
                <div>meanwhile, with the wood scraps, i whittled chopsticks + gave them out to friends. </div>
                <div><img src={chopsticksJaiveer} alt="chopsticks 1" width={250} /></div>
            </div>
        </div>
    </div>

}
