import axios from "axios";

const Today = new Date();
const TodayString = new Date(Today.getTime()).toISOString().slice(0, 10);

export const TableObject = {
  site: "https://crud-api-s366.onrender.com/api/products",
  status: [],

  async readPage(page) {
    try {
      const response = await axios.get(`${this.site}/page/${page}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async create(data) {
    try {
      const res = await axios.post(this.site, data);
      this.status.push(res.status);
    } catch (err) {
      this.status.push(err.response.data);
    }
  },

  async update(id, data) {
    try {
      const res = await axios.put(`${this.site}/${id}`, data);
      this.status.push(res.status);
    } catch (err) {
      this.status.push(err.response.data);
    }
  },

  async delete(id) {
    try {
      await axios.delete(`${this.site}/${id}`);
    } catch (error) {
      console.error(error);
    }
  },
};

const createTableInfo = (sn) => ({
  sn,
  title: "00000000",
  price: 111111111111,
  ratings: "08073646866",
  stock: "PAX",
  brand: 20000000,
  status: "Active",
  category: "",
  date: TodayString,
});

export const TableInfo = Array.from({ length: 35 }, (_, i) => createTableInfo(i + 1));

export const PageInfo = Array.from({ length: 20 }, (_, i) => ({
  num: i + 1,
  on: i === 0,
}));
