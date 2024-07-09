
import Handlebars from 'handlebars';
import { CNP_SECTION_TYPES } from '../config';
/**
 * @param {Array<any>} parent - The parent array of objects with nested arrays
 * @param {number} levels - The number of levels to go deep
 * @returns arrange in sequence to go ahead and go back in a queue
 */
export const nestedNext = (parent : Array<any>, levels : number = 3) => {
    let next = [];
    for (let i = 0; i < levels; i++) {
        next.push(parent[i]);
    }
    return next;
}


/**
 * create a function to navigate through the nested array where each object has a child array
 * move next and back stops where there is no child array or child array is iterated through
 * @param {Array<any>} base - The parent array of objects with nested arrays
 * @param {boolean} forward - The direction to move in the array
 * @param {Array<number>}currentNav - The current index of the array to navigate through
 * @return {Array<number>} - The array of indexes to go ahead and go back in a queue
 * For Now : testParts -> questionSet -> question
 */

export const nestedNavigation = <T>(base: Array<T>, forward: boolean = true, currentNav: Array<number>, passedChecks: Array<number>): { currentNav: Array<number>, passedChecks: Array<number> } => {
  currentNav = nestedArrFun(base)
  if(forward) {
      return moveForward(base, currentNav, passedChecks)
  }
    else {
      return moveBackward(base, currentNav, passedChecks)
    }

}

// export const flattenArr = (arr: Array<object>, childKey: string = "child"): Array<object> => {
//     return arr?.reduce((acc, item : object) => {
//         const newItem = acc?.concat(item, flattenArr(item[childKey], childKey))
//         //remove the child key from acc
//         delete newItem[childKey]
//         return newItem
//     }, [])
// }

const moveForward = (base : Array<any>, currentNav : Array<number> , passedChecks : Array<number>) => {
    //check current passed status, if passed then move forward

    //if every pass check is 0 then make the first one 1 and return the currentNav
    if(passedChecks.every((check) => check === 0)) {
        passedChecks[0] = 1
    }else{ //this means at least one check is 1
        //if only the first check is 1 then make the second one 1 and return the currentNav
        if(passedChecks[passedChecks.length - 1] === 0) {
            passedChecks[passedChecks.length - 1] = 1
        }else {
            //if all checks are 1 then check the deepest level if it is less than the length of the array at that level
            //if it is less then increment it and return the currentNav
            //if it is equal then move to the next level and return the currentNav
            // const activeNav 
            
        }

    }


    return {currentNav, passedChecks}
}

const moveBackward = (base : Array<any>, currentNav : Array<number> , passedChecks : Array<number>) => {
    return { currentNav, passedChecks }
}

export const nestedArrayLengths = (base : Array<any>, childKey : string = "child") => {
 if(!base || base.length === 0) return 0
 //get the length of current array and in the same way get the length of the child array as a dynamic function
 const lengthsArr : any = base.map((item : any) => {
    return nestedArrayLengths(item[childKey], childKey)
 })
 return lengthsArr
}


export const getNestedArrayObj = (base : Array<any>, indices : Array<number> = [0,0,0], childKey : string = "child") => {
    let obj = base
    console.log('TARGET OBJ GOES HEREA', obj)
    indices.forEach((index : number,id : number) => {
        console.log('TARGET OBJ GOES HEREA', {index , id} , obj) 
        if(!obj || obj.length === 0) return obj
        obj = obj[index]
    })
    return obj
}

export const nestedArrFun = (base : Array<any>, childKey : string = "child" , levelsCount : number = 3) => {
    //get base coordinates based on levels of nesting
    let baseCoordinates = []
    for(let i = 0; i < levelsCount; i++){
        baseCoordinates.push(0)
    }

    //
    return baseCoordinates;
}



export const parseInlineOptions = (items: Array<any>, templateText: string, text?: string,  startIndex?: number, endIndex?: number) => {
    const validPairs = [
        {init : "{", end : "}"},
        {init : "[", end : "]"},
        {init : "@", end : "@"},
    ]
    let template = Handlebars.compile(templateText);
    if(!text){
        return ""
    }else{
        if (!!startIndex && !!endIndex) {
            for (var i = startIndex; i <= endIndex; i++) {
                text = text?.replace("{" + items[i].num + "}", template(items[i]));
            }
        } else {
            items.forEach((item) => {
                validPairs.forEach(({init , end}) => {
                text = text?.replace(init + item.num + end, template(item));
                })
            })
        }
    
        return text;

    }

}

export const cnpMetaParser = ({tab} : {tab : string}) => {
    let tabs = Object.keys(CNP_SECTION_TYPES)
    let tabIndex = tabs.indexOf(tab)

    return {
        tabs,
        tabIndex
    }
}