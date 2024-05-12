
import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
	LogoContainer,
} from './footer.styles.jsx'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "grey",
					textAlign: "center",
					marginTop: "10px",
					fontFamily: "serif",
					border: "solid 2px",
					justifyContent: "space-between"
				}}
			>
			<LogoContainer to='/'>

			 <CrwnLogo/>

			 </LogoContainer>
			    Style that demands attention!
				
				
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">
							Aim
						</FooterLink>
						<FooterLink href="#">
							Vision
						</FooterLink>
						<FooterLink href="#">
							Testimonials
						</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">
							Writing
						</FooterLink>
						<FooterLink href="#">
							Internships
						</FooterLink>
						<FooterLink href="#">
							Coding
						</FooterLink>
						<FooterLink href="#">
							Teaching
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Our Locations
						</FooterLink>
						<FooterLink href="#">
							OurStore
						</FooterLink>
						<FooterLink href="#">
							Tirana
						</FooterLink>
						<FooterLink href="#">
							EU
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
