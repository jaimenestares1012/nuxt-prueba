import axios from "axios";
async function apigetCatalogos(data) {
  try {
    const response = await axios({
      url: "http://18.234.81.160:8080/catalogos",
      method: "POST",
      data
    });
    return response.data
  } catch (error) {
    return {
      codRes: "99",
      message: "Error",
    };
  }
}

export { apigetCatalogos };