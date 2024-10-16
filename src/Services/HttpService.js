import ApiEndPoints from '../Constants/ApiEndPoints';

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWUwMmQwMTk2ZjNkNTkwZjg1OTZhOTQyNjgwZjFhOSIsIm5iZiI6MTcyODk4OTY4OS45MzExMDksInN1YiI6IjY3MGU0N2RjOWYzNTMxZTZiMjZjNjQ4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iAN-jRw3U_QfU9ktze32kz_7xyUCHRHXj39WbHfGY-4'
};

const joinURL = (baseURL, url) => `${baseURL}/${url}`;

class HttpService {
    constructor() {
        this.domain = ApiEndPoints.BASE_URL;
    };

    request(url, method = 'POST', data = null) {
        url = joinURL(this.domain, url);

        const options = { headers, method };

        if (data) {
            options.body = JSON.stringify({ ...data });
        }

        return fetch(url, options);
    };

    async get(url, id) {
        const method = 'GET';

        if (id) {
            url = `${url}/${id}`;
        }

        return await this.request(url, method).then((response) => response.json());
    };

    async post(url, data) {
        const method = 'POST';
        return await this.request(url, method, data).then((response) => response.json(),);
    };

    async put(url, data) {
        const method = 'PUT';
        return await this.request(url, method, data).then((response) => response.json());
    };

    async delete(url, id) {
        const method = 'DELETE';

        if (id) {
            url = `${url}/${id}`;
        }

        return await this.request(url, method).then((response) => response.json());
    };
};

export default HttpService;