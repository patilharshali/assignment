import React, { useState } from 'react'
import RenderComponents from './RenderComponents'
import '../App.css'

export default function DynamicForm() {
  const [formData, setFormData] = useState({});
  const [showOnSubmit, setShowOnsubmit] = useState(false);
  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOnsubmit(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
        <RenderComponents
          items={data}
          onChange={handleInputChange}
          formData={formData}
        />
        <input type="submit" value="Submit" className="input-submit"/>
        </div>
      </form>
      {showOnSubmit && JSON.stringify(formData)}
      {showOnSubmit && console.log('Print form data here ', formData)}
    </div>
  );
}

const data =[{
  "tag": "input",
  "name": "first_name",
  "type": "text",
    "human_label": "First Name"
}, {
  "tag": "input",
  "name": "last_name",
  "type": "text",
    "human_label": "Last Name"
}, {
  "tag": "input",
  "name": "email",
  "type": "email",
  "human_label": "Email Address"
}, {
  "tag": "input",
  "name": "phone_number",
  "type": "text",
  "human_label": "Phone Number"
}, {
  "tag": "input",
  "name": "job_title",
  "type": "text",
  "human_label": "Job Title"
},{
  "tag": "input",
  "name": "date_of_birth",
  "type": "date",
  "human_label": "Date of Birth"
},{
  "tag": "input",
  "name": "parental_consent",
  "type": "checkbox",
  "human_label": "Parental Consent",
    "conditional": {
        "name": "date_of_birth",
        "show_if": (value) => {
      const now = new Date();
            return new Date(value) >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate());
    }
} }]
