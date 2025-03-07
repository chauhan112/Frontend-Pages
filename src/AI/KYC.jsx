export const KYC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white p-6 flex flex-col items-center">
                <div className="mb-6">
                    <img
                        src="https://via.placeholder.com/50" // Replace with actual Trishan Bank logo URL
                        alt="Trishan Bank Logo"
                        className="w-12 h-12"
                    />
                    <h2 className="text-xl font-bold mt-2">
                        Trishan Bank Limited
                    </h2>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-red-700">
                    <span className="mr-2">✔</span> Verify KYC
                </button>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">
                        KYC Verification
                    </h2>

                    {/* Personal Details Section */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-red-600 mb-4">
                            Personal Details
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>
                                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                    <option>Select a gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    DOB
                                </label>
                                <input
                                    type="date"
                                    placeholder="dd/mm/yyyy"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Father Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your father's name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Grand Father Name (optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your grand father's name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Marital Status (optional)
                                </label>
                                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                    <option>Select a status</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                    <option>Divorced</option>
                                    <option>Widowed</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Occupation Field
                                </label>
                                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                    <option>Select Occupation</option>
                                    <option>Student</option>
                                    <option>Employed</option>
                                    <option>Self-Employed</option>
                                    <option>Retired</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your contact number"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Address Details Section */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-red-600 mb-4">
                            Address Details
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    State
                                </label>
                                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                    <option>Select State</option>
                                    <option>State 1</option>
                                    <option>State 2</option>
                                    <option>State 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    District
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your district name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Municipality
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your municipality name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Ward No
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Ward Number"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Tole Name (optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your tole name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Document Details Section */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-red-600 mb-4">
                            Document Details
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Document Type
                                </label>
                                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                    <option>Select a document type</option>
                                    <option>Passport</option>
                                    <option>Citizenship</option>
                                    <option>Driver's License</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Citizenship No
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your citizenship number"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Issued District
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your citizenship issued district"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Date of Issue
                                </label>
                                <input
                                    type="date"
                                    placeholder="dd/mm/yyyy"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Profile Picture Upload Section */}
                    <div className="mb-6">
                        <div className="border-2 border-dashed border-gray-300 p-6 text-center">
                            <p className="text-sm text-gray-600">
                                Upload your profile picture (optional)
                            </p>
                            <p className="text-xs text-gray-500">
                                PNG, JPG or JPEG (MAX: 800x400px)
                            </p>
                            <button className="mt-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
                                Choose File
                            </button>
                            <p className="mt-2 text-sm text-gray-500">
                                No file chosen
                            </p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 w-full">
                            Submit Details for KYC Verification
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
