
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
padding: 1% 2.5%;
	background-color: white;
	 //position: absolute;
	bottom: 0;
	width: 95%;

	@media (max-width: 800px) {
		  padding: 70px 30px; 
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 800px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: black;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	font-family: serif;

	&:hover {
		color: grey;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: grey;
	margin-bottom: 40px;
	font-weight: bold;
	font-family: serif; 
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
`;