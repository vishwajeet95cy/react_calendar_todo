import api from "..";

const getAllData = async () => {
  try {
    const { data } = await api.get("/todo");
    return data;
  } catch (err) {
    console.log("get api Err", err);
    return [];
  }
};

const addData = async (value) => {
  try {
    const { data } = await api.post("/todo", value);
    return data;
  } catch (err) {
    console.log("post api Err", err);
    return [];
  }
};

const updateData = async (id, value) => {
  try {
    const { data } = await api.put(`/todo/${id}`, value);
    return data;
  } catch (err) {
    console.log("put api Err", err);
    return [];
  }
};

const deleteData = async (id) => {
  try {
    const { data } = await api.delete(`/todo/${id}`);
    return data;
  } catch (err) {
    console.log("delete api Err", err);
    return [];
  }
};

export { getAllData, addData, deleteData, updateData };
