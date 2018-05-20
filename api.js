import WPAPI from 'wpapi';

let endpoint = 'http://kevinmanase.com/blog/wp-json/';
if (typeof window !== 'undefined') {
  endpoint = `https://cors-anywhere.herokuapp.com/${endpoint}`;
}

const api = new WPAPI({ endpoint });
export default api;