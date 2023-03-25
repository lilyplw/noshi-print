import React, { useState, useRef, useCallback } from "react";
import { useReactToPrint } from "react-to-print";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Print from "./Print";

import styled from "@emotion/styled";

const NoshiPrintMain = () => {
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
            zoom: 0.72;
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
				<Print componentRef={componentRef} />
			</PrintArea>
			<Button variant="contained" onClick={handlePrint}>
				印刷
			</Button>
		</div>
	);
};

const PrintArea = styled.div`
	width: 50%;
	aspect-ratio: 1.41421356/1;
`;

export default NoshiPrintMain;
