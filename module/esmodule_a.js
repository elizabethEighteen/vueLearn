export const a = 1;
const b = 2;
const c = 3;
export { b, c };
// export b
// export * from "./esmodule_b.js";
// import './esmodule_b.js'
const promise = import ('./esmodule_b.js')
promise.then((res)=>{
    console.log(res)
})

