import React from "react";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<div className="container text-center my-4">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3 mb-4">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
