import axios from 'axios';

export default class FakeYoutubeClient {

    // 클래스 내부에서는 function 키워드 안 적어도 됨
    async search() {
        return axios.get('/videos/search.json');
    }

    async videos() {
        return axios.get('/videos/popular.json');
    }
}