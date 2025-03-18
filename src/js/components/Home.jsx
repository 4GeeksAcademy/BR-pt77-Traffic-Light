import React from "react";

//include images into your bundle
import ColorPicker from "./ColorPicker";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <ColorPicker/>
            
		</div>
	);
};

export default Home;