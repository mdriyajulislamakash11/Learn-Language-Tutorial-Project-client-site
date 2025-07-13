import Banner from '../components/Banner';
import StateSection from '../components/StateSection';

const Home = () => {
    return (
        <div>
            <Banner />


            <div className='my-20 w-11/12 mx-auto'>
                <StateSection />
            </div>
        </div>
    );
};

export default Home;