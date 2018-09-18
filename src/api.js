/**
 * Created by ttt on 29.10.2017.
 */
import 'whatwg-fetch/fetch';

const ROOT_URI = '/api/';

export default {
    hotels(){
        return fetch(ROOT_URI + 'get_hotels', {
            credentials: 'same-origin',
        }).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
                const error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }).then(function (response) {
            return response.json();
        });
    }
}