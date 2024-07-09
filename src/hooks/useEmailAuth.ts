import { emailSignin, emailSignup } from "@/ApiServices";
import { loginReducer } from "@/Store/Auth";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { usePost } from ".";

interface IEmailAuthValues {
    email: string;
    password: string;
    re_password?: string;
    name?: string;
    agreement?: boolean;
}

const initialValues = {
    name: "",
    email: "",
    password: "",
    re_password: "",
    agreement: true,
};

const useEmailAuth = (type : 'signup' | 'signin',onLogin ?: () => void) =>{
    const [isSignup, setIsSignup] = useState(type === 'signup') ;
    const dispatch = useDispatch();

    //capture the values using formik and yup validators
    //send the values to the server
    const form  = useFormik({
        initialValues:{...initialValues},
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email.').required("Email is required"),
            password: Yup.string().min(8, "Password Too Short!").required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            submitPost.mutate(values);
        },
    });


    const submitPost = usePost((values: IEmailAuthValues | any) =>  emailSignin(values) );
     //TODO: Find the way to use the interface 

    useEffect(() => {
        if (submitPost.data) {
            let { success, message, error,token: access_token,created } = submitPost.data || {};
            console.log('AFTER SUBMISSION OF FORM', submitPost.data)
            if (access_token) {
                dispatch(loginReducer(submitPost.data));
                onLogin && onLogin();
            } else {
                setIsSignup(!created)
                if(created) form.submitForm();
                console.log(message || error, { type : success ? 'success' : 'error'});
            }
        }
    }, [submitPost.data]);


    return {
        ...form,
        ...submitPost,
    }
}


export default useEmailAuth;    