import BigCup from '../components/BigCup';
import { useState} from "react";

const Cups: React.FC = () => {

	const [selected, setSelected] = useState<number[]>([]);

	const handleClick = (index: number) => {
		if (selected.includes(index)) {
			setSelected(selected.filter((item) => item !== index));
		} else {
			setSelected([...selected, index]);
		}
	};
	const fullCups = selected.length;
	const totalCups = 8;

	const percentage = (fullCups * 100 ) / totalCups;
	;
	
	const bigCupStyle = {
		height: `${percentage}%`
	};

	return (
		<>
			<div className="cup">
				<div className="remaining" id="remaining">
					<div className="span" id="litres">
						1.5L
					</div>
					<small>Remaining</small>
				</div>
				<div className="percentage" id="percentage">
					{percentage}%
				</div>
			</div>
			<p className="text">Select how many glasses of water you've had</p>
			<div className="cups">
				{Array(8)
					.fill(null)
					.map((_, index) => (
						<div
							className={`cup cup-small ${
								selected.includes(index) ? "full" : ""
							}`}
							onClick={() => handleClick(index)}
							key={index}
						>
							250 ml
						</div>
					))}
					<BigCup style = {bigCupStyle} percentage={percentage}/>
			</div>
		</>
	);
};
export default Cups;
