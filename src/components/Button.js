import Proptypes from "prop-types";

const Button = ({ color, text, onClick }) => {
	return (
		<button style={{ backgroundColor: color }} className="btn" onClick={onClick}>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "steelBlue",
};

Button.propTypes = {
	text: Proptypes.string,
	color: Proptypes.string,
	onClick: Proptypes.func,
};

export default Button;
