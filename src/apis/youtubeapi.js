import axios from "axios";
const KEY = 'AIzaSyB1oIG9wNY4lRyewP-wmIdUOpB7v7j6-C8';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResult: 5,
        key: KEY,
    },
});