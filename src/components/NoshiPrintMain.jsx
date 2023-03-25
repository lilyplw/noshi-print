import React, { useState, useRef, useCallback } from "react";
import { useReactToPrint } from "react-to-print";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
	red,
	pink,
	blue,
	green,
	amber,
	grey,
	blueGrey,
} from "@mui/material/colors";
import Print from "./Print";
import Input from "./input";

import styled from "@emotion/styled";

import Image1 from "../assets/1_musubi.jpg";
import Image2 from "../assets/2_musubikiri.jpg";
import Image3 from "../assets/3_butsu.jpg";

const NoshiPrintMain = () => {
	const [textColor, setTextColor] = useState("#000000");
	const [noshiImage, setNoshiImage] = useState(Image1);
	const [valueKomidashi, setValueKomidashi] = useState("");
	const [valueIwai, setValueIwai] = useState("");
	const [valueNaire, setValueNaire] = useState("");
	const [valueUji, setValueUji] = useState("");
	const [valueMei, setValueMei] = useState("");
	const [input, setInput] = useState(true);
	const componentRef = useRef();

	const reactToPrintContent = useCallback(() => {
		if (!componentRef.current) return null;
		return componentRef.current;
	}, []);

	const pageStyle = `
        @page {
            size: 100%;
            margin: 5mm;
        }
        @media print {
            html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            overflow: hidden;
            -webkit-print-color-adjust: exact;
            }
        }
        @media print {
            @page { size: landscape; }
		}
    `;

	const handlePrint = useReactToPrint({
		pageStyle, // 印刷のスタイリングを指定
		content: reactToPrintContent, // 印刷エリアを指定
		removeAfterPrint: true, // 印刷後に印刷用のiframeを削除する
	});

	const ButtonClick = (image, color) => {
		setNoshiImage(image);
		setTextColor(color);
	};

	return (
		<FlexComponent>
			<PrintArea>
				<Print
					componentRef={componentRef}
					image={noshiImage}
					komidashi={valueKomidashi}
					iwai={valueIwai}
					naire={valueNaire}
					input={input}
					uji={valueUji}
					mei={valueMei}
					textColor={textColor}
				/>
			</PrintArea>
			<InputComponent>
				<p className="buttonLabel">
					印刷は必ずこちらのボタンから行ってください
				</p>
				<Box>
					<ButtonRed variant="contained" onClick={handlePrint}>
						印刷
					</ButtonRed>
				</Box>
				<p className="buttonLabel">のしの種類を選択してください</p>
				<Box>
					<ButtonYellow
						variant="contained"
						onClick={() => ButtonClick(Image1, "#000000")}
					>
						結び
					</ButtonYellow>
					<ButtonYellow
						variant="contained"
						onClick={() => ButtonClick(Image2, "#000000")}
					>
						結び切り
					</ButtonYellow>
					<ButtonBlueGrey
						variant="contained"
						onClick={() => ButtonClick(Image3, "#A1A3A6")}
					>
						仏事
					</ButtonBlueGrey>
				</Box>
				<p className="buttonLabel">
					名入れの『自由入力』と『連名入力』の切り替え
				</p>
				<Box>
					<ButtonBlue variant="contained" onClick={() => setInput(!input)}>
						{input ? "自由入力に設定中" : "連名入力に設定中"}
					</ButtonBlue>
				</Box>

				<Input
					setValueKomidashi={setValueKomidashi}
					setValueIwai={setValueIwai}
					setValueNaire={setValueNaire}
					input={input}
					setValueUji={setValueUji}
					setValueMei={setValueMei}
				/>
			</InputComponent>
		</FlexComponent>
	);
};

const FlexComponent = styled.div`
	display: flex;
`;

const InputComponent = styled.div`
	width: 40%;
	padding: 40px;
	Button {
		margin: 10px;
	}
	.buttonLabel {
		margin: 20px 10px 0 10px !important;
	}
`;

const PrintArea = styled.div`
	width: 60%;
	aspect-ratio: 1.41421356/1;
`;

const ButtonRed = styled(Button)`
	width: 80%;
	padding: 20px;
	font-size: 30px;
	background-color: ${red[400]};
	&:hover {
		background-color: ${red[600]};
	}
`;
const ButtonGrey = styled(Button)`
	background-color: ${grey[400]};
	&:hover {
		background-color: ${grey[600]};
	}
`;
const ButtonPink = styled(Button)`
	background-color: ${pink[400]};
	&:hover {
		background-color: ${pink[600]};
	}
`;
const ButtonBlue = styled(Button)`
	width: 80%;
	background-color: ${blue[400]};
	&:hover {
		background-color: ${blue[600]};
	}
`;
const ButtonGreen = styled(Button)`
	background-color: ${green[400]};
	&:hover {
		background-color: ${green[600]};
	}
`;
const ButtonYellow = styled(Button)`
	width: 27%;
	background-color: ${amber[400]};
	&:hover {
		background-color: ${amber[600]};
	}
`;
const ButtonSakura = styled(Button)`
	background-color: ${pink[200]};
	&:hover {
		background-color: ${pink[300]};
	}
`;
const ButtonBlueGrey = styled(Button)`
	width: 20%;
	background-color: ${blueGrey[400]};
	&:hover {
		background-color: ${blueGrey[600]};
	}
`;
export default NoshiPrintMain;
