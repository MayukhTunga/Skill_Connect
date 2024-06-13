"use client"
import { useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        institution: '',
        yearOfCompletion: '',
        aboutme: '',
        education: '',
        skills: []
    });


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSkillsChange = (selectedOptions: any) => {
        setFormData({
            ...formData,
            skills: selectedOptions
        });
    };

    const handleEducationChange = (selectedOption: any) => {
        setFormData({
            ...formData,
            education: selectedOption
        });
    };


    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleSkillCreate = (inputValue: any) => {
        const newSkill = { value: inputValue.toLowerCase(), label: inputValue };
        setSkillsOptions([...skillsOptions, newSkill]);
        setFormData({
          ...formData,
          skills: [...formData.skills, newSkill]
        });
    };


    const educationLevels = [
        { value: '', label: 'Select your education level' },
        { value: 'highschool', label: 'High School' },
        { value: 'bachelor', label: "Bachelor's Degree" },
        { value: 'master', label: "Master's Degree" },
        { value: 'phd', label: 'Ph.D.' },
        { value: 'other', label: 'Other' }
    ];

    const [skillsOptions, setSkillsOptions] = useState([
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'csharp', label: 'C#' },
        { value: 'cpp', label: 'C++' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'go', label: 'Go' },
        { value: 'swift', label: 'Swift' },
      ]);

      const customStyles = {
        control: (provided: any) => ({
          ...provided,
          backgroundColor: '#1a202c', 
          borderColor: 'transparent'
        }),
        menu: (provided: any) => ({
          ...provided,
          backgroundColor: '#1a202c', 
          color: '#cbd5e0' 
        }),
        singleValue: (provided: any) => ({
          ...provided,
          color: '#cbd5e0' 
        }),
        input: (provided: any) => ({
          ...provided,
          color: '#cbd5e0' 
        }),
        placeholder: (provided: any) => ({
          ...provided,
          color: '#cbd5e0' 
        }),
        multiValue: (provided: any) => ({
          ...provided,
          backgroundColor: '#2d3748' 
        }),
        multiValueLabel: (provided: any) => ({
          ...provided,
          color: '#cbd5e0' 
        }),
        multiValueRemove: (provided: any) => ({
          ...provided,
          color: '#cbd5e0', 
          ':hover': {
            backgroundColor: '#4a5568', 
            color: '#cbd5e0' 
          }
        }),
        option: (provided: any, state: any) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#4a5568' : state.isFocused ? '#2d3748' : '#1a202c',
          color: '#cbd5e0' 
        })
      };


    return (
        <div className="min-h-screen flex w-full justify-center bg-black">
            <div className="bg-black p-8 rounded-lg shadow-lg w-full mx-4">
                <h2 className="text-3xl text-white font-bold mb-6 text-center">Sign up as a <span className="text-violet-700">Teacher</span></h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-violet-700 text-sm font-bold mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={"Roronoa"}
                                disabled={true}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:bg-violet-200 disabled:bg-gray-1000 disabled:border-none"
                            />
                        </div>
                        <div>
                            <label className="block text-violet-700 text-sm font-bold mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={"Zoro"}
                                disabled={true}
                                onChange={handleChange}
                                className="border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:bg-violet-200 disabled:bg-gray-1000 disabled:border-none"
                            />
                        </div>
                        <div>
                            <label className="block text-violet-700 text-sm font-bold mb-2">
                                Institution
                            </label>
                            <input
                                type="text"
                                id="institution"
                                name="institution"
                                value={formData.institution}
                                placeholder='Institution'
                                onChange={handleChange}
                                className="border-none rounded bg-gray-900 w-full py-2 px-3 text-white leading-tight focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-violet-700 text-sm font-bold mb-2">
                                Year of completion
                            </label>
                            <input
                                type="number"
                                id="yearOfCompletion"
                                name="yearOfCompletion"
                                placeholder='Year of Completion'
                                value={formData.yearOfCompletion}
                                onChange={handleChange}
                                className="border-none rounded bg-gray-900 w-full py-2 px-3 text-white leading-tight focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-violet-700 text-sm font-bold mb-2">
                                Skills
                            </label>
                            <CreatableSelect
                                isMulti
                                name="skills"
                                options={skillsOptions}
                                className="rounded w-full leading-tight focus:outline-none"
                                classNamePrefix="select"
                                onChange={handleSkillsChange}
                                onCreateOption={handleSkillCreate}
                                value={formData.skills}
                                styles={customStyles}
                            />
                        </div>
                        <div>
                            <label className="block text-violet-700 text-sm font-bold mb-2">
                                Education
                            </label>
                            <Select
                                name="Education"
                                options={educationLevels}
                                className="rounded w-full text-black leading-tight focus:outline-none focus:bg-violet-200"
                                classNamePrefix="select"
                                onChange={handleEducationChange}
                                value={formData.education}
                                styles={customStyles}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-violet-700 text-sm font-bold mb-2">
                                About me
                            </label>
                            <textarea
                                id="aboutme"
                                name="aboutme"
                                value={formData.aboutme}
                                onChange={handleChange}
                                className="border-none rounded w-full min-h-80 py-2 px-3 text-white leading-tight focus:outline-none bg-gray-900"
                            />
                        </div>
                        <div className="mt-6 flex justify-center sm:col-span-2">
                            <button type="submit" className="border-2 border-violet-700 rounded-full px-12 py-2 inline-block font-semibold text-white hover:bg-violet-700 hover:text-white">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
