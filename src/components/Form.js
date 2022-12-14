import React, { useState } from 'react'
import SignUp from './SignUp'
import PersonalInfo from './PersonalInfo'
import OtherInfo from './OtherInfo'

export default function Form() {

    const [page, setPage] = useState(0)
    const pageTitles = ["SignUp", "PersonalInfo", "Others"]

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        userName: '',
        nationality: '',
        other: ''
    })

    const pageDispaly = () => {
        if(page === 0)
        {
            return <SignUp formData={formData} setFormData={setFormData} />
        }
        else if(page === 1)
        {
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        }
        else{
            return <OtherInfo formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className="form">
           <div className="progressbar">
                <div
                    style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}>
                </div>
           </div>
           <div className="form-container">
                <div className="header">{pageTitles[page]}</div>
                <div className="body">{pageDispaly()}</div>
                <div className="footer">
                    <button onClick={() => {
                        setPage((currPage) => currPage - 1)}}>Prev</button>
                    <button onClick={() => {
                        if(page === pageTitles.length - 1){
                            alert("Form Submitted")
                        }
                        setPage((currPage) => currPage + 1)}}>{page === pageTitles.length - 1 ? "Submit" : "Next"}</button>
                </div>
           </div> 
        </div>
    )
}
