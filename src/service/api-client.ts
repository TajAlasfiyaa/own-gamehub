import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "dfffb41767434f769a9f9c89f3cd5bb1",
  },
});
