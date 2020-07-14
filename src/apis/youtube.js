import axios from 'axios';


const KEY = 'AIzaSyA-_Pe1itg3WOV78Np3D6CeakHBTTob7yc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});