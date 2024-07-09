import { AddContestCategory ,AddAudioCategory, UpdateAudioCategory, ContestCategoryUpdate} from "@/ApiServices";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePost } from ".";

interface IEmailAuthValues {
  name: string;
    file:File;
}

const initialValues = {
    name: "",
    file: null,
    agreement: true,
};


const useAddCategory = (type : 'addAudio' | 'AddContest',onLogin ?: () => void) => {

    const form  = useFormik({
        initialValues:{...initialValues},
        validationSchema: Yup.object({
            // name: Yup.string().email('Invalid Email.').required("Email is required")
        }),
        onSubmit: (values) => {
            console.log(values);
            submitPost.mutate(values as any );
        },
    });


    const submitPost = usePost((values: any) => type === "addAudio" ? UpdateAudioCategory(values) : ContestCategoryUpdate(values) );

    return {
        ...form,
        ...submitPost,
    }
}

export default useAddCategory