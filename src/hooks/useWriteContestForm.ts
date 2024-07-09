import { useFormik } from "formik";
import * as yup from "yup";


const useWriteContestForm = (data : any) => {
    const initialValues = data || {
        name:"",
        startDate:"",
        endDate:"",
        enteriesDate:"",
        resultDate:"",
        description:"",
        file:null
    }
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) =>{
            console.log(values)
        }
    })
  return {
    formik
  }
}

export default useWriteContestForm