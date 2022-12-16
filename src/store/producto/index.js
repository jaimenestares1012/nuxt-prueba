
import { apigetProducto, apigetPoderAquisitivo } from '@/api/productos';
import { apigetCatalogos } from '@/api/catalogos';
export const state = () => ({
  isLoading: false,
  isError: false,
  title: null,
  creador: null,
  tienda: null,
  productos:[],
  poder: [],
  catalogue: []
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
};



export const getters = {
  productos: (state) => state.productos,
  poder: (state) => state.poder,
  tienda: (state) => state.tienda,
  title: (state) => state.title,
  creador: (state) => state.creador,
  catalogue: (state) => state.catalogue ? state.catalogue : []
};
