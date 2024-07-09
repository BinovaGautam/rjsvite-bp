//environment file with all the environment variables

var _Environmentsc: any = {

    development: {
        env: "development",
        API_URL: "https://api2.bamchik.com/api/",  //From sanzeevani APIs, Change it to your own
        COUNTRY_PHONE_CODE: "+91",
        GOOGLE_MAP_API_KEY: "AIzaSyB2GVU_CI6mG6QKJSKS7CHmhCccrk8KGYs",
        LOGS: true,
    },
    staging: {
        env: "staging",
        API_URL: "https://dummyjson.com/staging/",
        COUNTRY_PHONE_CODE: "+91",
        GOOGLE_MAP_API_KEY: "AIzaSyB2GVU_CI6mG6QKJSKS7CHmhCccrk8KGYs",
        LOGS: true,
    },
    production: {
        env: "production",
        API_URL: "https://dummyjson.com/prodcution/",
        COUNTRY_PHONE_CODE: "+91",
        GOOGLE_MAP_API_KEY: "AIzaSyB2GVU_CI6mG6QKJSKS7CHmhCccrk8KGYs",
        LOGS: true,
    }
};

function getEnvironment() {
    var env : any= "development";
    return _Environmentsc[env];
}

var Environment = getEnvironment();
export default Environment;