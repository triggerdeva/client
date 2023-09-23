import { Link } from 'react-router-dom';
import './Footer.scss';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<section className="footer-wrapper">
			<div className="footer">
				<div className="left">
					<div className="socials">
						<Link
							to={'https://github.com/triggerdeva'}
							target={'_blank'}>
							<FaGithub />
						</Link>
						<Link
							to={'https://twitter.com/Triggerdeva2'}
							target={'_blank'}>
							<FaTwitter />
						</Link>
						<Link
							to={'https://www.linkedin.com/in/devendra-meshram-54a6631b9/'}
							target={'_blank'}>
							<FaLinkedin />
						</Link>
					</div>
				</div>
				<div className="right">
					<div>MakeMyTrip Clone © 2023</div>
					<div>Created by Devendra</div>
				</div>
			</div>
			<div className='print-watermark'>MakeMyTrip Clone by ViveK</div>
		</section>
	);
};

export default Footer;
