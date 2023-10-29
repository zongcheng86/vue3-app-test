import axios from "./index";

export const getLists = () => axios.get("home/page/1/10");

//通过列表ID获取详情
export const getDetail = (obj) => axios.get("detail", { params: obj });
