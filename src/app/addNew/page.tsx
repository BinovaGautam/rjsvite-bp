import { InputFactory } from '@/components';
import { useFormik } from 'formik';
import React from 'react';

const Page: React.FC = () => {

    const form  = useFormik({
        initialValues: {
            title: '',
            objective: '',
            start: '',
            duration: '',
        },
        onSubmit: (values : any) => {
            console.log(values);
        },
    
    })

    const inputFields = [
        {label : "Title", type : "text",name: "title"},
        {label : "Objective", type : "wysiwyg",name: "objective"},
        {label : "Start @", type : "text",name: "start"},
        {label : "Time Expected", type : "text",name: "duration"},
    ]

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
            <header className="w-full flex justify-between items-center p-4 bg-white shadow-lg rounded-lg mb-4">
                <h1 className="text-2xl font-bold">FocusLocus</h1>
                <div className="text-right">
                    <p className="font-semibold">19th March</p>
                    <p className="text-sm text-gray-600">Sunday, 2024</p>
                </div>
            </header>
            <div className="w-full max-w-md bg-white p-4 shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Create New Locus</h2>
                <form>
                    <div className="mb-4">
                       {
                            inputFields.map((inputField, index) => (
                                 <InputFactory
                                 key={index}
                                 inputField={{
                                    ...inputField,
                                    ...form.getFieldProps(inputField.name),
                                    ...form.getFieldMeta(inputField.name)
                                 }}
                                />
                            ))
                       }
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
