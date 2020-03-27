// import { render } from 'react-dom'
// import { withFormik, Form, Field } from 'formik'
// import * as yup from 'yup'
// import { useAuth } from '../../contexts'
// import Login from './login.component';
// import axios from 'axios'

// const loginFormik = withFormik({
//     mapPropsToValues({ email, password }) {
//         return {
//             email: email || '',
//             password: password || ''
//         }
//     },
//     validationSchema: yup.object({
//         email: yup.string().required('Email is required'),
//         password: yup.string().min(6, 'Password must be at least 6 characters or more').required('Password is required'),
//       }),
//     handleSubmit(values) {
//         axios.post('/api/auth', values).then(
//             res => {
//               if(res.status === 200){
//                 useAuth().createSession(res.data);
//               }
//             }
//         )
//     }
// })(Login)

// export default loginFormik;