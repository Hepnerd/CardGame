import './PlaySpace.scss'
import Cards from './Cards/Cards'
import { useRef, useEffect, useState } from "react";

export default function PlaySpace() {
    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
        setActive(!isActive);
      };

    return (
        <>
            <div className="playerBoard">
                <div className={isActive ? 'handClosed': 'handFanned'} onClick={toggleClass}>
                    <Cards cssClass={"gameCard"}/>
                    <Cards cssClass={"gameCard"}/>
                    <Cards cssClass={"gameCard"}/>
                    <Cards cssClass={"gameCard"}/>
                    <Cards cssClass={"gameCard"}/>
                    <Cards cssClass={"gameCard"}/>
                </div>
                <div className="pile">
                    <Cards cssClass={"gameCardPile"}/>
                    <Cards cssClass={"gameCardPile"}/>
                    <Cards cssClass={"gameCardPile"}/>
                    <Cards cssClass={"gameCardPile"}/>
                    <Cards cssClass={"gameCardPile"}/>
                    <Cards cssClass={"gameCardPile"}/>
                </div>
            </div>
        </>
    )
}