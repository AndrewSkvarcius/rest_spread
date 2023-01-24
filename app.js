const filterOutOdds = (...nums) => nums.filter(num =>  num % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});

const doubleAndReturnArgs = (arr,...args) => [...arr,...args.map(arg => arg * 2)]


const removeRandom = items => {
let id = Math.floor(Math.random()* items.length);
return [...items.slice(0,id), ...items.slice(id + 1)];
};

const extend = (array1, array2) => { return [...array1,...array2]
};

const  addKeyVal = (obj, key, val) => {
    let newobj = {...obj};
    newobj[key] = val;
    return newobj; 
};
const removeKey = (obj, key, val) => {
    let newobj = {...obj};
    delete newobj[key];
    return newobj;
};
const combine = (obj1, obj2) => ({...obj1,...obj2});

const  update = (obj, key, val) => {
    let newobj = {...obj};
    newobj[key] = val;
    return newobj; 
};