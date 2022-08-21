
import { async } from "regenerator-runtime";
import {TIMEOUTSECONDS} from './config.js'


const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
export const  getJSON=async function(url){


    try{
        const res=await Promise.race([fetch(url),timeout(TIMEOUTSECONDS)]);
        const data=await res.json()
        if(!res.ok) throw new Error(`Opps ${data.message} , Error code ${res.status}`);
        return data;
    }

    catch(err){
// console.error(`${err} ⛔`);
throw err;

    }
}