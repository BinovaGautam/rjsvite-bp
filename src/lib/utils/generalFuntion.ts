// import {window} from 'browser-monads-

import { COUNTRY_CODES, ICON_SIZES } from "../Configs";

export const getInitials = (name: string) => {
  const names = name.split(' ');
  const initials = names[0].substring(0, 1).toUpperCase();
  return initials;
};

export const handleSuccess = (response: any) => {
  try {
    console.log('BASE RESPONSE FROM BEFORE HANDLE SUCCESS ');
    let { msg, status, data, message } = response || {};

    if (!!msg && Object.keys(response)?.length === 1) {
      //for auth routes only response looks like : {msg : 'otp sent to xxxxxx'}
      return { success: true, message: msg };
    }


    // success case for app APIs
    if (!!status && status === 'success') {
      console.log('STATUS IS SUCCESS AND DATA IS ', data)
      return { success: true, data: data || {}, message: message || msg || '' };
    }

    // success case for lean APIs
    if (!!status && status === 200) {
      return { success: true, data: data || {} };
    }

    return response;
  } catch (e) {
    console.log('BASE ERROR FROM HANDLE SUCCESS', e, response);
    return { success: false, message: 'Something went wrong', error: e };
  }
};

export const ProxyImage = (url: string) => {
  return `/api/imgProxy?url=${url}`;
}

export const adjustString = (str: string, length: number) => {
  if (!str) return str;
  if (str?.length > length) {
    return str.slice(0, length) + '...';
  }
  return str;
}


export const getSearchString = (basePath: string) => {
  const pathName = window.location.pathname;
  if (pathName.indexOf(basePath) === 0) {
    const pathKey = pathName.substring(basePath.length)
    return decodeURI(pathKey)
  }
  return false
}

export const getLocalTokens = async () => {
  //Get token from persist gate and return it
  const persistRoot = window.localStorage.getItem('persist:root');
  if (persistRoot) {
    const persistRootParsed = JSON.parse(persistRoot);
    const authParsed = JSON.parse(persistRootParsed?.auth || '{}');
    if (!authParsed?.user) return false;

    const { token, refresh_token } = authParsed?.user || {};
    console.log('PERSIST ROOT TOKENSSSSSS  =======>', { token, refresh_token, persistRoot: authParsed })
    return { accessToken: token, refreshToken: refresh_token }
  } else {
    return false;
  }
}

export const arrayGroupBy = (array: any[], key: string) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
}

export const wordUppercase = (str: string) => {
  //replace underscore with space and then capitalize
  str = str.replace(/_/g, ' ');
  return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

export const DownloadImage = (uri: string, title:string) => {

  const base64ToBlob = (base64: string) => {
    const parts = base64.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const array = new Uint8Array(new ArrayBuffer(raw.length));

    for (let i = 0; i < raw.length; i++) {
      array[i] = raw.charCodeAt(i);
    }

    return new Blob([array], { type: contentType });
  };

  const blob = base64ToBlob(uri);
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = title || "QScanImage";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}


// export const CreateObj = ({ btnTitle, data, nameKey, openPage, selectLabel, selectValue, setCategory, valueKey }: ICategories) => {
//   const categories = {
//     btnTitle: btnTitle,
//     data: data,
//     nameKey: nameKey,
//     openPage: openPage,
//     selectLabel: selectLabel,
//     selectValue: selectValue,
//     setCategory: setCategory,
//     valueKey: valueKey,
//   }

//   return categories;
// }


export const getExactPath = (path: string,positionFromLast : number = 1) => {
  const paths = path.split("/");
  
  if(positionFromLast){
    return paths[paths.length - positionFromLast];
  }
  return paths[paths.length - 1];
}

export const renderHtmlString = (htmlString: string) => {
  return { __html: htmlString };
}

export function formatTimestamp(milliseconds : number) {

  const date = new Date(Number(milliseconds));

  const year = date.getUTCFullYear();
  const month = ('0' + (date.getUTCMonth() + 1)).slice(-2); // Adding 1 because getUTCMonth returns zero-based month index
  const day = ('0' + date.getUTCDate()).slice(-2);


  return `${year}-${month}-${day}`;
}


export const getHrefPath = (pathArr : string[]  ,base ?: string ) => {
  pathArr.reverse();
  if(base){
    return base + '/'+ pathArr.join("/");
  }
  return pathArr.join("/");
}

export const formatPhone = (phone : string) => {
  //if phone has the country code then return it or else add the country code
  if(phone.startsWith('+')){
    return phone;
  }
  return `${COUNTRY_CODES.IN?.code}${phone}`;
}