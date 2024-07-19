/** @format */

import React, {useState} from "react";
import "./Panel.css";

const Panel = ({image, type, have_acc}) => {
	const [toggle, setToggle] = useState(false);

	const signUp = () => {
		setToggle(!toggle);
	};
	return (
		<div
			className={
				have_acc
					? "panel left-panel flex flex-col items-end justify-around text-center z-[7]"
					: "panel right-panel flex flex-col items-end justify-around text-center z-[7]"
			}>
			<div className='content text-white'>
				<h3 className='font-[600] text-2xl '>
					{have_acc ? "New here ?" : "One of us ?"}
				</h3>
				<p className='text-[0.95rem] py-[0.7rem]'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					magni odit enim temporibus dolor minus alias unde at recusandae autem
				</p>
				<button
					onClick={signUp}
					className='transparent  outline-none rounded-[49px] cursor-pointer bg-[#5995fd] uppercase transition duration-500 ease-linear hover:bg-[#4d84e2]'
					id='sign-up-btn'>
					{type}
				</button>
			</div>
			<img
				className={
					!have_acc ? "transform translate-x-[1000px] w-screen" : "w-screen"
				}
				src={image}
				alt=''
			/>
		</div>
	);
};

export default Panel;
