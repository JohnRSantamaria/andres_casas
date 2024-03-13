import Hero from '@/components/sections/hero';
import Insurances from '@/components/sections/insurances';
import Investments from '@/components/sections/investments';
import Loans from '@/components/sections/loans';
import PortfolioPurchase from '@/components/sections/portfolioPurchase';
import RealEstateConsultancy from '@/components/sections/realEstateConsultancy';

export default function Home() {
	return (
		<main>
			<Hero />
			<PortfolioPurchase />
			<Loans />
			<RealEstateConsultancy />
			<Insurances />
			<Investments />
		</main>
	);
}
