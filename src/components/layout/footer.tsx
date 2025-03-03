import { Text } from "../ui/typography";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full my-20">
			<div className="flex flex-col items-center justify-center gap-4">
				<Text>© {currentYear} App - All rights reserved.</Text>
			</div>
		</footer>
	);
};

export default Footer;
