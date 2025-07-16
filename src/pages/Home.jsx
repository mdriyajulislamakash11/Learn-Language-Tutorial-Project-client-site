import Banner from '../components/Banner';
import CategorySections from '../components/CategorySections';
import StateSection from '../components/StateSection';
import PricingPlans from './PricingPlans';

const Home = () => {
    return (
        <div>
            <Banner />


            <div className='my-20 w-11/12 mx-auto'>
                <StateSection />

                <CategorySections />

                <PricingPlans />

                
            </div>
        </div>
    );
};

export default Home;