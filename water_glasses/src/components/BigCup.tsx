interface WaterLevelProps {
	percentage: number;
	style: { height: string };
}

const BigCup: React.FC<WaterLevelProps> = ({ percentage, style }) => {
	console.log(style);
	return (
		<>
			<div className="water-level" style={style}>
				{percentage}%
			</div>
		</>
	);
};

export default BigCup;
