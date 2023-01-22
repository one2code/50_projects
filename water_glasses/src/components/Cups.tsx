function Cups() {
	return (
		<>
			<div className="cup">
				<div className="remained" id="remained">
					<div className="span" id="litres">
						1.5L
					</div>
					<small>Remained</small>
				</div>
				<div className="percentage" id="percentage">
					20%
				</div>
			</div>
			<p className="text">
				Select how many glasses of water that you have drank
			</p>
            <div className="cups">
                <div className="cup cup-small full">250 ml</div>
                <div className="cup cup-small full">250 ml</div>
                <div className="cup cup-small">250 ml</div>
                <div className="cup cup-small">250 ml</div>
                <div className="cup cup-small">250 ml</div>
                <div className="cup cup-small">250 ml</div>
                <div className="cup cup-small">250 ml</div>
                <div className="cup cup-small">250 ml</div>
            </div>
		</>
	);
}
export default Cups;
