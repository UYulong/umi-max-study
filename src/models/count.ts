export default {
  namespace: 'count',

  state: {
    count: 0
  },

  reducers: {
    add(state: any, { payload }: any) {
      return {
        ...state,
        count: state.count += payload
      }
    }
  }
};
