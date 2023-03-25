import React from "react";
import styled from "@emotion/styled";

const Print = (props) => {
	return <Test ref={props.componentRef}>Print</Test>;
};

const Test = styled.div`
	background-color: aqua;
	width: 100%;
	height: 100%;
`;

export default Print;
