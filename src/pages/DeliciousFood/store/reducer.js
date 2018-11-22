const defaultState = {
  title: '这是美食叶',
  src: './images/qianqiu.jpg',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type ==='CHANCG_LIST') {
    var newstate = JSON.parse(JSON.stringify(state));
    newstate.list = action.list;
    return newstate;
  }
  return state;
}
