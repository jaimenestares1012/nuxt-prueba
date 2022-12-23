
import { apigetProducto, apigetPoderAquisitivo } from '@/api/productos';
import { apigetCatalogos, apiDatosCanasta, apiregistrarBolsa, apiinsertProductos } from '@/api/catalogos';
export const state = () => ({
  isLoading: false,
  isError: false,
  title: null,
  creador: null,
  tienda: null,
  productos:[],
  poder: [],
  catalogue: [],
  bolsa : {},
});

export const mutations = {
  SET_CATALOGS(state, data) {
    state.catalogue = [ ...state.catalogue, ...data ]
    console.log("state.catalogue", state.catalogue);
  },
  SET_ISLOADING(state, value) {
    state.isLoading = value;
  },
  SET_IS_ERROR(state, value) {
    state.isError = value;
  },
  SET_PRODUCTOS(state, value){
    state.productos = value;
  },
  SET_CLEAR(state){
    state.productos = [];
  },
  SET_PODER(state, value){
    state.poder = value;
  },
  SET_PODER_ADIC(state, value){
    state.title = value.title;
    state.tienda = value.tienda;
    state.creador = value.creador;
  },
  SET_BOLSA(state, value){
    state.bolsa = value
  },
  RESET_PRODUCTOS(state){
    state.productos = []
  }
};

export const actions = {
    async getCatalogos({ commit }, payload) {
      const responseApigetCatalogos = await apigetCatalogos(payload);
      console.log("responseApigetCatalogos", responseApigetCatalogos);
      commit('SET_CATALOGS', responseApigetCatalogos.data);
    },
    async getProducto({ commit }, payload) {
      console.log("payload", payload);
      const responseApigetProducto = await apigetProducto(payload);
      console.log("<------- FIN   --------->");
      if (responseApigetProducto.codRes=="00") {
        commit('SET_PRODUCTOS', responseApigetProducto.data);
        // commit('SET_PHONE_NUMBER', responseApiSendToken);
      }
      console.log("responseApigetProducto", responseApigetProducto);
      // commit('SET_RESPONSE_CODE', responseApiSendToken.responseCode);
      // commit('SET_PHONE_NUMBER', responseApiSendToken);
    },
    async datosCanasta({ commit }, payload){
      console.log("payload", payload);
      const responseApiDatosCanasta = await apiDatosCanasta(payload);
      console.log("<------- FIN   --------->");
      if (responseApiDatosCanasta.codRes=="00") {
        commit('SET_BOLSA', responseApiDatosCanasta.data);
       }
    },
    async getPoderAquisitivo({ commit }, payload) {
      console.log("getPoderAquisitivo", payload);
      const responseApigetPoderAquisitivo = await apigetPoderAquisitivo(payload);
      if (responseApigetPoderAquisitivo.codRes=="00") {
        commit('SET_PODER', responseApigetPoderAquisitivo.data);
        commit('SET_PODER_ADIC', responseApigetPoderAquisitivo);
        return responseApigetPoderAquisitivo
      }else{
        commit('SET_IS_ERROR', false);
      }
    },
    async registrarBolsa({ commit }, payload) {
      console.log("registrarBolsa", payload);
      const responseApiregistrarBolsa = await apiregistrarBolsa(payload);
      console.log("<.............................>");
      console.log("<.............................>");
      console.log("<.............................>");
      console.log("<.............................>");
      console.log("<.............................>");
      console.log("responseApiregistrarBolsa", responseApiregistrarBolsa);
      if (responseApiregistrarBolsa.codRes=="00") {
        // commit('SET_PODER', responseApiregistrarBolsa.data);
        // commit('SET_PODER_ADIC', responseApiregistrarBolsa);
        // return responseApigetPoderAquisitivo
        console.log("ES UN 0000000000000000000000000");
        return true
      }else{
        commit('SET_IS_ERROR', false);
      }
    },
    async insertProductos({ commit }, payload) {
      console.log("insertProductos", payload);
      const responseApiinsertProductos = await apiinsertProductos(payload);
      console.log("responseApiinsertProductos", responseApiinsertProductos);
      if (responseApiinsertProductos.codRes=="00") {
        commit('RESET_PRODUCTOS');
        // commit('SET_PODER_ADIC', responseApiregistrarBolsa);
        return responseApiinsertProductos.data
      }else{
        commit('SET_IS_ERROR', false);
      }
    },
};



export const getters = {
  productos: (state) => state.productos,
  poder: (state) => state.poder,
  tienda: (state) => state.tienda,
  title: (state) => state.title,
  creador: (state) => state.creador,
  catalogue: (state) => state.catalogue ? state.catalogue : [],
  bolsa: (state) => state.bolsa ? state.bolsa : {}
};
