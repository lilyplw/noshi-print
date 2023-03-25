import React, { useState } from "react";
import styled from "@emotion/styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const InputComponent = styled.div`
	input,
	textarea {
		height: 2.4em;
		max-width: 1019.5px;
		width: 100%;
		margin: 10px 0 30px 0;
		border-radius: 4px;
		border: none;
		box-shadow: 0 0 0 1px #ccc inset;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		white-space: normal !important;
		font-size: 20px;
	}
	input:focus {
		outline: 0;
		box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
	}
	.long {
		height: 400px;
	}
`;

const Input = (props) => {
	const [komidashi, setKomidashi] = useState("");
	props.setValueKomidashi(komidashi);
	const [iwai, setIwai] = useState("");
	props.setValueIwai(iwai);
	const [naire, setNaire] = useState("");
	props.setValueNaire(naire);
	return (
		<div>
			<InputComponent>
				<label>小見出し</label>
				<input
					type="text"
					value={komidashi}
					onChange={(event) => setKomidashi(event.target.value)}
				/>
			</InputComponent>
			<InputComponent>
				<label>見出し</label>
				<input
					type="text"
					value={iwai}
					onChange={(event) => setIwai(event.target.value)}
				/>
			</InputComponent>
			<Tabs>
				<TabList>
					<Tab>自由入力</Tab>
					<Tab>連名</Tab>
				</TabList>
				<TabPanel>
					<InputComponent>
						<label>自由入力</label>
						<textarea
							className="long"
							type="text"
							value={naire}
							onChange={(event) => setNaire(event.target.value)}
						/>
					</InputComponent>
				</TabPanel>
				<TabPanel>
					<h1>Aboutです</h1>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default Input;
