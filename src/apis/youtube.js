import axois from 'axios';

const KEY = "AIzaSyA3DmSA7RtgrQimEkomxe6_-o8soVCnjRw";

export default axois.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});