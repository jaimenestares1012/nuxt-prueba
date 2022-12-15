
import { apigetProducto, apigetPoderAquisitivo } from '@/api/productos';
export const state = () => ({
  isLoading: false,
  isError: false,
  title: null,
  creador: null,
  tienda: null,
  productos:[],
  poder: []
});

export const mutations = {
  SET_ISLOADING(state, value) {
    state.isLoading = value;
  },
  SET_IS_ERROR(state, value) {
    state.isError = value;
  },
  SET_PRODUCTOS(state, value){
    state.productos = value;
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
};
