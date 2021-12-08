import { v4 as uuidv4 } from 'uuid';
import OneImg from '../image/DSC00735_15.jpg';
import TwoImg from '../image/DSC00735_15.jpg';
import ThreeImg from '../image/DSC00735_15.jpg';
import FourImg from '../image/DSC00735_15.jpg';
import FiveImg from '../image/DSC00735_15.jpg';
import SixImg from '../image/DSC00735_15.jpg';

const tldata = [
    {
        id: uuidv4(),
        name: 'img1',
        desc: 'Tokyo',
        img: OneImg,
    },
    {
        id: uuidv4(),
        name: 'img2',
        desc: 'Tokyo',
        img: TwoImg,
    },
    {
        id: uuidv4(),
        name: 'img3',
        desc: 'Tokyo',
        img: ThreeImg,
    },
    {
        id: uuidv4(),
        name: 'img4',
        desc: 'Tokyo',
        img: FourImg,
    },
    {
        id: uuidv4(),
        name: 'img5',
        desc: 'Tokyo',
        img: FiveImg,
    },
    {
        id: uuidv4(),
        name: 'img6',
        desc: 'Tokyo',
        img: SixImg,
    }
];

export default tldata;