import { useState, useEffectf } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup"
export function FormikFormDemo(){

    return(
        // NOTE: this is Sample Code You Can add more elements based on requirement. 
        <div className="container-fliud">
            <Formik initialValues= {{userID:'',password:'', Number:0, Gender:false, email:''}} validationSchema={yup.object({
                userID: yup.string().required('User ID Required !').min(4,'user ID too short').max(15, 'User ID too long'),
                password: yup.string().required('password Required !').matches(/[A-Z]\w{5,15}/, 'week Password'),
                Number: yup.string().required('Number Required !').matches(/\+91\d{10}/, 'Invalid Number'),
                Gender: yup.boolean().required('Gender Required !'),
                email: yup.string().required('Email Required!')

            })} >
                   {     formik=>
                <Form className="text-center border-1 border-black m-4 bg-black text-white d-colum card  w-25">
                    <dl>
                        <h2 className="">User Login </h2>
                        <dt>User Name</dt>
                        <dd>
                              <Field type='text' name='userID'/>
                        </dd>
                        <dd className="text-danger"> <ErrorMessage name="userID"/></dd>

                        <dt>Password</dt>
                        <dd>
                              <Field type='password' name='Password'/>
                        </dd>
                        <dd className="text-danger"> <ErrorMessage name="Password"/></dd>
                        <dt>Mobile</dt>
                        <dd>
                            <Field type='Number' name='Number'/>
                        </dd>
                        <dd className="text-danger"> <ErrorMessage name='Number'/></dd>
                        <dt>Gender</dt>
                        <dd>
                            <Field type='radio' name='Gender'/>Male <br/>
                            &nbsp;&nbsp; <Field type='radio' name='Gender'/> Femael
                        </dd>
                        <dd className="text-danger"> <ErrorMessage name='Gender'/></dd>
                    </dl>
                    <dt>Email</dt>
                        <dd>
                            <Field type='email' name='Email'/>
                        </dd>
                        <dd className="text-danger"> <ErrorMessage name='Email'/></dd>

                    <button className="btn btn-primary m-2 p-2 ">Verify</button>
                    <button className={`btn btn-success m-2 p-2 ${(formik.dirty)?'d-inline' :'d-none'} `}> Save</button>
                </Form>     
                }        
            </Formik>
        </div>
    )
}
