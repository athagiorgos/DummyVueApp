import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};