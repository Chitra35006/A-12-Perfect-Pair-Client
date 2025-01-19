import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import WorkingProcess from "./HowItWorks/WorkingProcess";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
            <Helmet><title>Perfect Pair | Home</title></Helmet>
           <Banner></Banner>
           <WorkingProcess></WorkingProcess>
           <Featured></Featured>
        </div>
    );
};

export default Home;