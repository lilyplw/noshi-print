import React from "react";
import styled from "@emotion/styled";

const Print = (props) => {
	const Printcomponents = styled.div`
		width: 100%;
		height: 100%;
		color: ${props.textColor};
		background-image: url(${props.image});
		background-size: 100%;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: "Yuji Syuku", serif;
	`;

	const IwaiComponent = styled.div`
		-ms-writing-mode: tb-rl;
		writing-mode: vertical-rl;
		flex-basis: 50%;
		text-align: center;
		position: relative;
		h2 {
			font-size: 3.6rem;
		}
		h3 {
			position: absolute;
			top: 34%;
			left: 120%;
			transform: translate(-50%, -50%);
		}
	`;
	const NaireComponent = styled.div`
		-ms-writing-mode: tb-rl;
		writing-mode: vertical-rl;
		margin: 10% 0 0 0;
		flex-basis: 40%;
		text-align: center;
		h2 {
			font-size: 2.2rem;
			white-space: pre-wrap;
			word-wrap: break-word;
		}
	`;

	const RenmeiComponent = styled.div`
		-ms-writing-mode: tb-rl;
		writing-mode: vertical-rl;
		margin: 5% 0 0 0;
		flex-basis: 45%;
		display: flex;
		/* flex-direction: column; */
		text-align: center;
		/* position: relative; */

		.uji {
			margin: 0 auto 6%;
			flex-basis: 50%;
			text-align: end;
			/* position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%); */
		}
		.mei {
			flex-basis: 50%;
			text-align: start;
			white-space: pre-wrap;
			word-wrap: break-word;
		}
	`;

	return (
		<Printcomponents ref={props.componentRef}>
			<IwaiComponent>
				<h3>{props.komidashi}</h3>
				<h2>{props.iwai}</h2>
			</IwaiComponent>
			{props.input ? (
				<NaireComponent>
					<h2>{props.naire}</h2>
				</NaireComponent>
			) : (
				<RenmeiComponent>
					<div className="uji">
						<h2>{props.uji}</h2>
					</div>
					<div className="mei">
						<h2>{props.mei}</h2>
					</div>
				</RenmeiComponent>
			)}
		</Printcomponents>
	);
};

export default Print;
