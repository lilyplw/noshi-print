import React, { useState, useRef, useCallback } from "react";
import { useReactToPrint } from "react-to-print";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Print from "./Print";
import Input from "./input";

import styled from "@emotion/styled";

import Image1 from "../assets/1_musubi.jpg";
import Image2 from "../assets/2_musubikiri.jpg";
import Image3 from "../assets/3_butsu.jpg";

const NoshiPrintMain = () => {
	const [noshiImage, setNoshiImage] = useState(Image1);
	const [valueKomidashi, setValueKomidashi] = useState("");
	const [valueIwai, setValueIwai] = useState("");
	const [valueNaire, setValueNaire] = useState("");
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

	return (
		<div>
			<PrintArea>
				<Print
					componentRef={componentRef}
					image={noshiImage}
					komidashi={valueKomidashi}
					iwai={valueIwai}
					naire={valueNaire}
				/>
			</PrintArea>
			<Button variant="contained" onClick={handlePrint}>
				印刷
			</Button>
			<Button variant="contained" onClick={() => setNoshiImage(Image1)}>
				結び
			</Button>
			<Button variant="contained" onClick={() => setNoshiImage(Image2)}>
				結び切り
			</Button>
			<Button variant="contained" onClick={() => setNoshiImage(Image3)}>
				仏事
			</Button>
			<Input
				setValueKomidashi={setValueKomidashi}
				setValueIwai={setValueIwai}
				setValueNaire={setValueNaire}
			/>
		</div>
	);
};

const PrintArea = styled.div`
	width: 50%;
	aspect-ratio: 1.41421356/1;
`;

export default NoshiPrintMain;
