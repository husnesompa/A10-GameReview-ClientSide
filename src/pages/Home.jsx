import React from 'react';
import Banner from '../components/Banner';
import HighestRatedGames from '../components/HighestRatedGames ';
import LatestGame from '../components/LatestGame';

const Home = () => {
    return (
        <div>
            <Banner />
            <HighestRatedGames/>
            <LatestGame/>
        </div>
    );
};

export default Home;