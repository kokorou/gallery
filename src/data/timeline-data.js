import { v4 as uuidv4 } from 'uuid';
import OneImg from '../img/img_1.jpg';
import TwoImg from '../img/img_2.jpg';
import ThreeImg from '../img/img_3.jpg';
import FourImg from '../img/img_4.jpg';
import FiveImg from '../img/img_5.jpg';
import SixImg from '../img/img_6.jpg';

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