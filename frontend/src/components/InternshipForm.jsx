import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    companyName: "",
    companyAddress: "",
    externalMentorName: "",
    externalMentorContact: "",
    externalMentorEmail: "",
    companyRegNumber: "",
    city: "",
    stipend: "",
    offerLetter: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, offerLetter: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add submission logic here (API call or state update)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded text-gray-300 space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">Submit Internship Details</h2>

      <InputField
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <InputField
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <InputField
        name="companyAddress"
        value={formData.companyAddress}
        onChange={handleChange}
        placeholder="Company Address"
      />
      <InputField
        name="externalMentorName"
        value={formData.externalMentorName}
        onChange={handleChange}
        placeholder="External Mentor Name"
      />
      <InputField
        type="tel"
        name="externalMentorContact"
        value={formData.externalMentorContact}
        onChange={handleChange}
        placeholder="External Mentor Contact Number"
      />
      <InputField
        type="email"
        name="externalMentorEmail"
        value={formData.externalMentorEmail}
        onChange={handleChange}
        placeholder="External Mentor Email Address"
      />
      <InputField
        name="companyRegNumber"
        value={formData.companyRegNumber}
        onChange={handleChange}
        placeholder="Company’s Registration Number"
      />
      <InputField
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
      />
      <InputField
        type="number"
        name="stipend"
        value={formData.stipend}
        onChange={handleChange}
        placeholder="Stipend Amount"
      />
      <div>
        <label className="block text-sm mb-2">Offer Letter</label>
        <input
          type="file"
          name="offerLetter"
          onChange={handleFileChange}
          className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
        />
      </div>

      <Button type="submit" label="Submit" />
    </form>
  );
};

export default InternshipForm;
