import Banner from '../components/Banner';
import CategorySections from '../components/CategorySections';
import StateSection from '../components/StateSection';
import FreeResources from './FreeResources';
import LearningTips from './LearningTips';
import PricingPlans from './PricingPlans';
import MegaFunLearningSection from './MegaFunLearningSection';

const Home = () => {
    return (
        <div>
            <Banner />


            <div className='my-20 w-11/12 mx-auto'>
                <StateSection />

                <CategorySections />

                <LearningTips />

                <FreeResources /> 

                <MegaFunLearningSection />

                <PricingPlans />

            </div>
        </div>
    );
};

export default Home;