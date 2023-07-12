// divede Object to another Objects

const sourceObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

const targetObject ={
  aGroup : {
    a: 1,
    b: 2,
  },
  bGroup :{
    c: 3,
    d: 4,
    e: 5,
  }
};

const gorupInfo ={
  aGroup: ['a', 'b'],
  bGroup: ['c','d','e'],
};

function makeGroup(source , info){
  const merge = (a,b) =>({...a, ...b});
  return Object.keys(info)
  .map(group => ({[group] : info[group]
    .map(k=> ({[k] : source[k]}))
    .reduce(merge, {})
  }))
  .reduce(merge, {});
}
