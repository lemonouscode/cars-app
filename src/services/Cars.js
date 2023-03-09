import axios from "axios";

class Cars {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000/api",
    });
  }

  getAll = async (endpoint) => {
    try {
      const response = await this.api.get(endpoint);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

export default new Cars();
