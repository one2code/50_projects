import { useState, useEffect } from "react";

interface Arr {
    type: string;
    text: string;
}
const Animations: React.FC = () => {

    const [isClear, setIsClear] = useState<boolean>(false);
    const animationElements: Arr[] = [{type: 'h1', text: 'Drink Water'}, {type: 'h3', text: 'Goal: 2 Litres'}]

    useEffect(()=> {
        setTimeout(()=> {
            setIsClear(true)
        }, 3000)
    }, [])
	return <>
    {animationElements.map((element, index) => {
        return <div className={`animated ${isClear ? 'clear' : ''}`} key={index}>
            
        </div>
    })
    }
    </>;
};

export default Animations;
