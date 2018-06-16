import axios from "../util/axios";
import qs from "simple-query-string";

class Resources {
  constructor(resource) {
    this.resource = resource;
  }

  _serilizeparams(params) {
    const query = qs.stringify(params);
    return query.length > 0 ? `?${query}` : "";
  }

  async fetchResource(params) {
    try {
      const q = this._serilizeparams(params);
      const response = await axios.get(`${this.resource}${q}`);
      return response;
    } catch (error) {
      return error;
    }
  }

  async storeResource(data) {
    try {
      const response = await axios.post(`${this.resource}`, data);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateResource(id, data) {
    try {
      const response = await axios.put(`${this.resource}/${id}`, data);
      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteResource(id) {
    try {
      const response = await axios.delete(`${this.resource}/${id}`);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default Resources;
