import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import SuccessStory from "./SuccesStory/SuccessStory";
import SuccessCounter from "./SuccessCounter/SuccessCounter";
import PreimumUsers from "./PremimumUsers/PreimumUsers";


const Home = () => {
    return (
        <div>
            <Helmet><title>Perfect Pair | Home</title></Helmet>
           <Banner></Banner>
            <PreimumUsers></PreimumUsers>
           <Featured></Featured>
           <SuccessCounter></SuccessCounter>
           <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;