import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faYoutube,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState, useRef } from "react";

interface CounterProps {
	target: number;
    platform: string;
}

const Counter: React.FC<CounterProps> = ({platform, target }) => {
	const [count, setCount] = useState(2);
	const [twitterCount, setTwitterCount] = useState(0);
	const [youtubeCount, setYoutubeCount] = useState(0);
	const [facebookCount, setFacebookCount] = useState(0);
	const [lastCount, setLastCount] = useState(0);
	const timeoutRef = useRef<number | null>(null);
	const increment = target / 200;

	useEffect(() => {
		if (count < target && lastCount !== count) {
			setLastCount(count);

			timeoutRef.current = setTimeout(() => {
				setCount(Math.ceil(lastCount + increment));
				setTwitterCount(Math.ceil(lastCount + increment));
				setYoutubeCount(Math.ceil(lastCount + increment));
				setFacebookCount(Math.ceil(lastCount + increment));
			}, 1);
		} else if (count >= target) {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current as number);
			}
		}
	}, [count, target, increment, lastCount]);

	return (
		<>
			<div className="counter-container">
            {platform === "twitter" && (
                <>
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                    <div className="counter">{twitterCount}</div>
                    <span>Twitter Followers</span>
                </>
            )}
			</div>
			<div className="counter-container">
            {platform === "youtube" && (
                <>
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                    <div className="counter">{youtubeCount}</div>
                    <span>Youtube Subscribers</span>
                </>
            )}
            
			</div>
			<div className="counter-container">
            {platform === "facebook" && (
                <>
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                    <div className="counter">{facebookCount}</div>
                    <span>Facebook Followers</span>
                </>
            )}
			</div>
		</>
	);
};

export default Counter;
