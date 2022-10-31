import React from 'react'

const PersonalInfo = ({formData, setFormData}) => {
    return (
        <div className="personal-info-container">
            <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
            <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
            <input type="text" placeholder="Username" value={formData.userName} onChange={(e) => setFormData({...formData, userName: e.target.value})} />
        </div>
    )
}

export default PersonalInfo
