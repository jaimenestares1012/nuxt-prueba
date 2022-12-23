import axios from "axios";
async function apigetCatalogos(data) {
  try {
    const response = await axios({
      url: `http://18.234.81.160:8080/catalogos/${data.tipo}`,
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

async function apiDatosCanasta(data) {
  try {
    const response = await axios({
      url: `http://18.234.81.160:8080/datosCanasta/${data}`,
      method: "GET"
    });
    return response.data
  } catch (error) {
    return {
      codRes: "99",
      message: "Error",
    };
  }
}

async function apiregistrarBolsa(data) {
  try {
    const response = await axios({
      url: `http://18.234.81.160:8080/registrarBolsa/1`,
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

async function apiinsertProductos(data) {
  try {
    const response = await axios({
      url: `http://18.234.81.160:8080/insertProductos/1`,
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

export { apigetCatalogos, apiDatosCanasta , apiregistrarBolsa, apiinsertProductos};