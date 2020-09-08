import React, {CSSProperties} from "react";
import {Formik} from "formik";
import Router from 'next/router'
import * as Yup from 'yup';
import {SubmitBtn, WarningMsg} from "../myStyledCcomponents";

const axios = require('axios');

const input = {
    padding: '10px',
    width: 'calc(100% - 24px)'
}
const formStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: '20px auto',
}
const inputWrap = {
    display: 'flex',
    marginBottom: '25px'
}

const column: CSSProperties = {
    width: '50%'
}

const textArea = {
    padding: '10px',
    minHeight: '100px',
    marginBottom: '20px'
}
const postSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    title: Yup.string()
        .required('Title is required'),
    text: Yup.string()
        .required('Text is required')
})
const PostForm = () => {
    const handleSubmit = (values) => {
        axios({
            method: 'post',
            url: 'https://simple-blog-api.crew.red/posts',
            data: {name: values.name, title: values.title, text: values.text}
        })
            .then(() => {
                // todo show popup with Success message
                Router.push('/');
            })
            .catch((e) => {
                // todo show popoup with Error
                console.error(e);
            });
    }

    return (
        <Formik initialValues={{
            title: '',
            name: '',
            text: ''
        }}
                onSubmit={handleSubmit}
                validationSchema={postSchema}
        >
            {
                ({
                     values,
                     errors,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                 }) => (
                    <form onSubmit={handleSubmit}>
                        <div style={formStyle}>
                            <div style={inputWrap}>
                                <div style={column}>
                                    <input
                                        type="text"
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        style={input}
                                        placeholder={'Post Title'}
                                    />
                                    <WarningMsg>
                                        {errors.title && errors.title}
                                    </WarningMsg>
                                </div>
                                <div style={column}>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        style={input}
                                        placeholder={'Enter your name'}
                                    />
                                    <WarningMsg>
                                        {errors.name && errors.name}
                                    </WarningMsg>
                                </div>
                            </div>
                            <textarea
                                name="text"
                                id="postBody"
                                style={textArea}
                                placeholder={'Tell us something interesting ...'}
                                value={values.text}
                                onChange={handleChange}
                            />
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <SubmitBtn type="submit" disabled={isSubmitting}>
                                    Submit
                                </SubmitBtn>
                            </div>
                        </div>
                    </form>
                )}
        </Formik>
    )
}

export default PostForm;