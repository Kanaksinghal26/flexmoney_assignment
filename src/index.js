/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
import React from 'react';
class YogaForm extends React.Component {
        state = {
            name: '',
            dob: '',
            contactNumber: '',
            email: '',
            address: '',
            emergencyContact: '',
            enrollmentMonth: '',
            batchTime: '',
            agreeToFee: false,
        };

        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
        };

        handleCheckboxChange = (event) => {
            this.setState({ agreeToFee: event.target.checked });
        };

        handleSubmit = (event) => {
            event.preventDefault();
            const { name, dob, contactNumber, email, address, emergencyContact, enrollmentMonth, batchTime, agreeToFee } = this.state;

            if (!name || !dob || !contactNumber || !email || !address || !emergencyContact || !enrollmentMonth || !batchTime || !agreeToFee) {
                return alert('Please fill out all the fields.');
            }

            // Make API call to submit user data and process payment
        };

        render() {
                const { name, dob, contactNumber, email, address, emergencyContact, enrollmentMonth, batchTime, agreeToFee } = this.state;

                return ( <
                        form onSubmit = { this.handleSubmit } >
                        <
                        label >
                        Name:
                        <
                        input type = "text"
                        name = "name"
                        value = { name }
                        onChange = { this.handleChange }
                        /> < /
                        label > <
                        label >
                        Date of Birth:
                        <
                        input type = "date"
                        name = "dob"
                        value = { dob }
                        onChange = { this.handleChange }
                        /> < /
                        label > <
                        label >
                        Contact Number:
                        <
                        input type = "text"
                        name = "contactNumber"
                        value = { contactNumber }
                        onChange = { this.handleChange }
                        /> < /
                        label > <
                        label >
                        Email:
                        <
                        input type = "email"
                        name = "email"
                        value = { email }
                        onChange = { this.handleChange }
                        /> < /
                        label > <
                        label >
                        Address:
                        <
                        input type = "text"
                        name = "address"
                        value = { address }
                        onChange = { this.handleChange }
                        /> < /
                        label > <
                        label >
                        Emergency Contact:
                        <
                        input type = "text"
                        name = "emergencyContact"
                        value = { emergencyContact }
                        onChange = { this.handleChange }
                        /> < /
                        label > <
                        label >
                        Enrollment Month:
                        <
                        select name = "enrollmentMonth"
                        value = { enrollmentMonth }
                        onChange = { this.handleChange } >
                        <
                        option value = "" > 

                )
                 }
                        