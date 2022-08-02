import MainBanner from '../components/MainBanner';
import ImageText from '../components/ImageText';
import Masonry from '../components/Masonry';
import RichText from '../components/RichText';

import main_video from '../assets/video/main-video.mp4';
import camera01 from '../assets/img/camera-01.jpeg';
import camera02 from '../assets/img/camera-02.jpeg';
import camera03 from '../assets/img/camera-03.jpeg';
import edit01 from '../assets/img/edit-01.jpeg';

const masonryLists = [
    {
        img : camera02, 
        subHeading : "Hello", 
        body : "Hello", 
        id : 'first block'
    },
    {
        img : camera03, 
        subHeading : "Hello", 
        body : "Hello", 
        id : 'second block'
    },
    {
        img : edit01, 
        subHeading : "Hello", 
        body : "Hello", 
        id : 'third block'
    },
];

const Home = () => {
    return (
        <div className="home-page page">
            <MainBanner video={main_video}/>
            <ImageText photo={camera01}/>
            <Masonry masonryLists={masonryLists}/>
            <RichText/>
        </div>
    )
}

export default Home;