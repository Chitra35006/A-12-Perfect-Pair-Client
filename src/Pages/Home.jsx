import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import WorkingProcess from "./HowItWorks/WorkingProcess";
import Featured from "./Featured/Featured";
import SuccessStory from "./SuccesStory/SuccessStory";


const Home = () => {
    return (
        <div>
            <Helmet><title>Perfect Pair | Home</title></Helmet>
           <Banner></Banner>
           <WorkingProcess></WorkingProcess>
           <Featured></Featured>
           <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;