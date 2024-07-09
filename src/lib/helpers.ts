export const handleResponse = async(response : any) => {
    // These responses are from firebase firestore db
    console.log('RESPONSE FROM HANDLE RESPONSE METHOD 123', response)
    if(response.exists){
        return {success : true , data : response.data() }
    }

    if(!!response.docs ){
        const data = response.docs.map((doc : any) => {
            return { ...doc.data(), id: doc.id }
        })
        console.log('DATA FROM HANDLE RESPONSE METHOD ======>>>>>>', data)
        return {success : true , data}
    }

    if(response.id){
        const data = {id : response.id , ...response.data()}
        return {success : true , data}
    }

    // if response has error of any kind
    if(response.error){
        return {success : false , error : response.error}
    }

    // if response has success true
    if(response.success && !!response.data){
        return response?.data
    }

    // if response has custom data

    if(response.custom){
        return {success : true , data : response.data}
    }
}

export function transformArray(originalArray : any) {
    const transformedArray = originalArray?.map((obj : any) => ({
      value: obj.name,
      label: obj.name.charAt(0).toUpperCase() + obj.name.slice(1)
    }));
  
    return transformedArray;
  }


export const secondsToHms = (duration : number) => {
    //returns time as number <second| seconds | minute | minutes | hour | hours>
    const hours = duration >= 3600 ?  Math.floor(duration / 3600) : 0;
    const minutes = duration >= 60 ?  Math.floor((duration % 3600) / 60) : 0;
    const seconds = duration % 60;
    let time = '';
    if (hours > 0) {
      time += hours === 1 ? `${hours} hour ` : `${hours} hours `;
    }
    if (minutes > 0) {
      time += minutes === 1 ? `${minutes} minute ` : `${minutes} minutes `;
    }
    if (seconds > 0) {
      time += seconds === 1 ? `${seconds} second` : `${seconds} seconds`;
    }

   
    return time
} 

export const playAudioAction = (audioUrl: string, cb?: Function) => {
  console.log('Playing Audio STARTED', audioUrl);
  let audio = new Audio(audioUrl);
  audio.play();
  audio.addEventListener('ended', () => cb && cb());
}

export const autoScrollUpandDown = (element: HTMLElement ,direction : 'up' | 'down'| 'both' = "both" , ) => {


  if(direction === 'up'){
    element.scrollTop = 0;
  }else if(direction === 'down'){
    element.scrollTop = element.scrollHeight;
  }else if(direction === 'both'){
    element.scrollTop = 0;
    setTimeout(() => {
      element.scrollTop = element.scrollHeight;
    }, 1000);
  }            
}

export const arrGroupBy = (arr : Array<any> , key : string) => {
  let groupedArrObj  : any = {}

  arr.forEach((item) => {
    if(!!groupedArrObj[item[key]]){
      groupedArrObj[item[key]].push(item)
    }else{
       groupedArrObj[item[key]] = [item]
    }
  })

  return groupedArrObj;
}