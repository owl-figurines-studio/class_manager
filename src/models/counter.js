const initState = {
  count: 0,
}

const counter = {
  namespace: 'counter',
  state: initState,
  reducers: {
    add(state) { const { count } = state; return { ...state, count: count + 1 } },
    minus(state) { const { count } = state; return { ...state, count: count - 1 } },
  },
}

export default counter