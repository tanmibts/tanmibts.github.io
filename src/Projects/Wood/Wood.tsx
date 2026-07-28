import "./Wood.css";
import chair from "./assets/chair.jpg";
import chopsticksJaiveer from "./assets/chopsticks_jaiveer.png";

export const Wood = () => {
    return <div>
        <div>2023</div>
        <div>remainders: chair (cherry frame, scrap textile)</div>
        <div className="subtext">I was drawn to woodworking by the beauty of wood, and realizing how much wood becomes scrap -- and is thrown out -- was eye opening. in this way, the craft of woodworking can be practiced to mirror our large-scale systems: they are lines.</div>
        <div className="subtext">in a functioning ecological system, there is no such thing as "waste" or "trash"; outputs for one become desirable inputs for another. that is to say, they are loops, circles, ovals.</div>
        <div className="subtext">what circles can we create with our scraps and remnants, if we were to give them attention and care?</div>
        <div className="margin-xy">
            <div className="container">
                <div className="chair--container">
                    <img className="chair--pic" src={chair} alt="chair" />
                </div>
                <div className="chair-description">
                    <div className="subtext">in this project, I asked friends for old "leftover" clothes that they no longer wore. I tore them into strips and wove them into a textile for the seat and back.</div>
                    <div className="subtext">the frame is based on the pierre jeanneret chandigarh chair (with my modifications). the original chandigarh chairs were designed to be constructed with simple tools, minimizing energy and resource "waste" during creation.</div>
                </div>
            </div>
        </div>
        <div className="margin-xy">
            <div className="container">
                <div className="subtext">with the wood scraps, I whittled chopsticks and gave them to the friends who contributed textiles.</div>
                <div ><img className="chopsticks--pic" src={chopsticksJaiveer} alt="chopsticks 1" /></div>
            </div>
        </div>
    </div>;
};
