import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";
import BannerText from '../../Components/BannerText';
import Feature from '../../Components/Feature';

function Home() {
	return (
		<main className="main">
			<BannerText />
			<section className="features">
				<h2 className="sr-only">Features</h2>
				<Feature img={iconChat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
				<Feature img={iconMoney} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
				<Feature img={iconSecurity} title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." />
			</section>
		</main>
	);
}

export default Home;