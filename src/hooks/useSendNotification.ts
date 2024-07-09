import { useFormik } from "formik";
import * as yup from "yup";

const useSendNotification = () => {
    const initialObj  = {
        title:"",
        message:"",
        file:null
    }

    const validationSchem = yup.object().shape({
        title:yup.string().min(5, "name ha atleast 5 characters").required("name is required")
    })

    const formik = useFormik({
        initialValues: initialObj,
        validationSchema:validationSchem,
        onSubmit: (values) => {
            console.log(values)
        }
    })
  return {
        formik
  }
}

export default useSendNotification