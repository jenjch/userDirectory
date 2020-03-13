import axios from "axios";
// const BASEURL = "https://randomuser.me/api/?page=3&results=100&seed=abc&nat=us";

export default {
  display: function() {
    return axios.get("https://randomuser.me/api/?page=10&results=100&seed=abc&nat=us");
  }

};

// export default {
//     search: function(query) {
//       return axios.get(BASEURL + query + APIKEY);
//     }
  
//   };
