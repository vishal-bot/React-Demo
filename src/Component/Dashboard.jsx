
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        startDate: '',
        firstName: '',
        lastName: '',
        designation: '',
    });
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        // Retrieve data from local storage on component mount
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(storedProjects);
    }, []);

    useEffect(() => {
        // Update local storage when projects state changes
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingIndex !== null) {
            // If editing, update the existing project
            const updatedProjects = [...projects];
            updatedProjects[editingIndex] = formData;
            setProjects(updatedProjects);
            setEditingIndex(null);
        } else {
            // If adding, add a new project
            setProjects([...projects, formData]);
        }

        // Clear the form data
        setFormData({ projectName: '', description: '', startDate: '', firstName: '', lastName: '', designation: '',});
    };

    const handleEdit = (index) => {
        // Set form data to the selected project for editing
        const selectedProject = projects[index];
        setFormData(selectedProject);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        // Remove the selected project from the projects array
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
    };

    return (

        <>
            <div className="w-full sm:px-6 md:px-8 lg:ps-72">
                {/* Card Section */}
                <div className="max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Card */}
                    <div className="bg-white rounded-xl border-2 shadow p-4 sm:p-7 dark:bg-slate-900">
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                Project Details
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Manage your project title and Description.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* Grid */}
                            <div className="grid sm:grid-cols-10 gap-2 sm:gap-4">

                                {/* End Col */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="af-project-title" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Project Title
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-8">
                                    <input id="af-project-title"
                                        type="text"
                                        name="projectName"
                                        value={formData.projectName}
                                        onChange={handleInputChange}
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 border-2 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="Title" />
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="af-description" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Description
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-8">
                                    <textarea id="af-description"
                                        className="py-2 px-3 block w-full border-gray-200 border-2 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        rows={6}
                                        placeholder="Type your Details..."
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="af-description" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Start Date
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-8">
                                    <input
                                        type="date"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 border-2 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/* End Col */}
                                <div class="sm:col-span-2">
                                    <label for="af-account-full-name" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Employee Name
                                    </label>
                                </div>
                                {/* End Col */}
                                <div class="sm:col-span-8">
                                    <div class="sm:flex">
                                        <input id="af-account-full-name" 
                                        type="text" 
                                        class="py-2 px-3 pe-11 block w-full border-2 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
                                        placeholder="Vishal"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange} />
                                        <input 
                                        type="text" 
                                        class="py-2 px-3 pe-11 block w-full border-2 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
                                        placeholder="Singh"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange} />
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="af-project-title" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Designation
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-8">
                                    <input id="af-project-title"
                                        type="text"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleInputChange}
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 border-2 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="Title" />
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Grid */}
                            <div className="mt-5 flex justify-end gap-x-2">
                                <button type="reset" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Reset
                                </button>
                                <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                {editingIndex !== null ? 'Update' : 'Add'} Project
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* End Card */}
                </div>
                {/* End Card Section */}

                <div className="mx-auto pb-5">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project Details</h2>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-800 pt-8 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <article key={index} className="flex max-w-xl flex-col border-2 p-4 items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time className="text-gray-500">
                                        {project.startDate}
                                    </time>
                                </div>
                                <div className="group">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <Link to='#'>
                                            <span className="inset-0" />
                                            {project.projectName}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
                                </div>
                                <div className="mt-8 flex items-center gap-x-4">
                                    {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <Link to='#'>
                                                <span className="inset-0" />
                                                {project.firstName + " " + project.lastName}
                                            </Link>
                                        </p>
                                        <p className="text-gray-600">{project.designation}</p>
                                    </div>
                                </div>
                                <div className="mt-5 flex justify-end gap-x-2">
                                    <button 
                                    type="button"
                                    onClick={() => handleEdit(index)} 
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Edit
                                    </button>
                                    <button 
                                    type="submit"
                                    onClick={() => handleDelete(index)} 
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Delete
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Dashboard;
