import { Header, Grid, Container } from "semantic-ui-react";
import DropdownLanguage from "../../components/Dropdown/DropdownLanguage";
import DropdownLevel from "../../components/Dropdown/DropdownLevel";
import MyProfileNavbar from "../../components/MyProfileNavbar/MyProfileNavbar";
import { Button } from "react-bootstrap";
import "../fonts/fonts.css";

const style = {
	h3: {
		marginTop: "2em",
		padding: "2em 0em",
	},
	h1Styles: {
		padding: "1.5em 1.5em",
	},
};

const ForeignLanguage = () => {
	return (
		<>
			<Container>
				<Header as="h3" content="" style={style.h3} textAlign="center" />

				<Grid container columns={2} divided relaxed stackable>
					<Grid.Column width={4}>
						<MyProfileNavbar />
					</Grid.Column>
					<Grid.Column>
						<Grid container columns={2} relaxed stackable>
							<Grid.Column>
								<DropdownLanguage />
							</Grid.Column>

							<Grid.Column>
								<DropdownLevel />
							</Grid.Column>
						</Grid>
						<div style={style.h1Styles}>
							<Button type="submit" className="btn btn-primary    ">
								Kaydet
							</Button>
						</div>
					</Grid.Column>
				</Grid>
			</Container>
		</>
	);
};
export default ForeignLanguage;
