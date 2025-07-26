import React from "react";

const AnalyzeAi = ({ booking, aiAnalysis, onClose }) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[95vh] flex flex-col overflow-hidden">
                {/* Header - Keep existing styling */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-4 text-white">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold flex items-center">
                            <svg
                                className="w-6 h-6 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                ></path>
                            </svg>
                            AI Analysis Report
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-200 transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-purple-100 mt-1">
                        Analyzing reports for {booking.user.name}
                    </p>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-8">
                        {/* 1. Patient Overview */}
                        {aiAnalysis?.patientInfo && (
                            <div>
                                <h3 className="text-lg font-semibold text-purple-700 mb-4 border-b pb-2 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Patient Overview
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                        <h4 className="text-sm font-medium text-gray-500">Basic Information</h4>
                                        <table className="mt-2 w-full">
                                            <tbody>
                                                <tr>
                                                    <td className="py-1 text-sm font-medium text-gray-700">Name</td>
                                                    <td className="py-1 text-sm text-gray-900">{aiAnalysis.patientInfo.name}</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1 text-sm font-medium text-gray-700">Age</td>
                                                    <td className="py-1 text-sm text-gray-900">{aiAnalysis.patientInfo.age}</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1 text-sm font-medium text-gray-700">Gender</td>
                                                    <td className="py-1 text-sm text-gray-900">{aiAnalysis.patientInfo.gender}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                        <h4 className="text-sm font-medium text-gray-500">Vital Statistics</h4>
                                        <table className="mt-2 w-full">
                                            <tbody>
                                                <tr>
                                                    <td className="py-1 text-sm font-medium text-gray-700">Blood Pressure</td>
                                                    <td className={`py-1 text-sm ${aiAnalysis.patientInfo.bloodPressure?.includes('High') ? 'text-red-600' : 'text-gray-900'}`}>
                                                        {aiAnalysis.patientInfo.bloodPressure || 'N/A'}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1 text-sm font-medium text-gray-700">Diabetic</td>
                                                    <td className={`py-1 text-sm ${aiAnalysis.patientInfo.diabetic === 'Yes' ? 'text-red-600' : 'text-gray-900'}`}>
                                                        {aiAnalysis.patientInfo.diabetic || 'N/A'}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1 text-sm font-medium text-gray-700">Hyperthyroidism</td>
                                                    <td className={`py-1 text-sm ${aiAnalysis.patientInfo.hyperthyroidism === 'Yes' ? 'text-red-600' : 'text-gray-900'}`}>
                                                        {aiAnalysis.patientInfo.hyperthyroidism || 'N/A'}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                        <h4 className="text-sm font-medium text-gray-500">Key Health Indicators</h4>
                                        {aiAnalysis.patientInfo.keyIndicators ? (
                                            <table className="mt-2 w-full">
                                                <tbody>
                                                    {Object.entries(aiAnalysis.patientInfo.keyIndicators).map(([key, value]) => (
                                                        <tr key={key}>
                                                            <td className="py-1 text-sm font-medium text-gray-700">{key}</td>
                                                            <td className={`py-1 text-sm ${value?.status === 'abnormal' ? 'text-red-600' : 'text-gray-900'}`}>
                                                                {value?.value || 'N/A'}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <p className="text-sm text-gray-500 mt-2">No additional indicators available</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 2. Report Analyses */}
                        {Array.isArray(aiAnalysis?.reportAnalyses) && (
                            <div>
                                <h3 className="text-lg font-semibold text-purple-700 mb-4 border-b pb-2 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Detailed Report Analysis
                                </h3>
                                <div className="space-y-4">
                                    {aiAnalysis.reportAnalyses.map((report, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                            <div className="bg-gray-50 px-4 py-3 border-b flex justify-between items-center">
                                                <h4 className="font-semibold text-gray-800">{report.groupName}</h4>
                                                {report.reportUrls?.length > 0 && (
                                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                                        {report.reportUrls.length} file(s)
                                                    </span>
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                                    <div className="lg:col-span-2">
                                                        <h5 className="text-md font-medium text-gray-700 mb-2">Analysis Summary</h5>
                                                        <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
                                                            <p className="text-gray-700 whitespace-pre-line">{report.analysis}</p>
                                                        </div>

                                                        {Array.isArray(report.warnings) && report.warnings.length > 0 && (
                                                            <div className="mt-4">
                                                                <h5 className="text-md font-medium text-red-600 mb-2 flex items-center">
                                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                                    </svg>
                                                                    Clinical Findings Requiring Attention
                                                                </h5>
                                                                <ul className="list-disc pl-5 space-y-1 text-red-600 bg-red-50 p-3 rounded-md">
                                                                    {report.warnings.map((warning, i) => (
                                                                        <li key={i} className="text-sm">{warning}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {report.reportUrls?.length > 0 && (
                                                        <div>
                                                            <h5 className="text-md font-medium text-gray-700 mb-2">Report Previews</h5>
                                                            <div className="grid grid-cols-2 gap-2">
                                                                {report.reportUrls.slice(0, 4).map((url, idx) => (
                                                                    <div key={idx} className="rounded overflow-hidden shadow border border-gray-200">
                                                                        <img
                                                                            src={url}
                                                                            alt={`Report ${idx + 1}`}
                                                                            className="object-cover w-full h-24 hover:opacity-80 transition-opacity cursor-pointer"
                                                                            onClick={() => window.open(url, '_blank')}
                                                                            onError={(e) => {
                                                                                e.target.onerror = null;
                                                                                e.target.src = "/pdf-icon.png";
                                                                            }}
                                                                        />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            {report.reportUrls.length > 4 && (
                                                                <p className="text-xs text-gray-500 mt-2">
                                                                    + {report.reportUrls.length - 4} more files
                                                                </p>
                                                            )}
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3. Overall Summary */}
                        {aiAnalysis?.overallSummary && (
                            <div>
                                <h3 className="text-lg font-semibold text-purple-700 mb-4 border-b pb-2 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                    Comprehensive Health Summary
                                </h3>
                                <div className="bg-white border border-gray-200 rounded-lg p-4">
                                    <div className="whitespace-pre-line text-gray-700">{aiAnalysis.overallSummary}</div>
                                </div>
                            </div>
                        )}

                        {/* 4. Doctor Recommendations */}
                        {Array.isArray(aiAnalysis?.doctorRecommendations) && (
                            <div>
                                <h3 className="text-lg font-semibold text-purple-700 mb-4 border-b pb-2 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Clinical Recommendations
                                </h3>
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                    <div className="divide-y divide-gray-200">
                                        {aiAnalysis.doctorRecommendations.map((suggestion, index) => (
                                            <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className={`p-1 rounded-full ${index % 3 === 0 ? 'bg-blue-100' : index % 3 === 1 ? 'bg-green-100' : 'bg-purple-100'}`}>
                                                            <svg className={`w-4 h-4 ${index % 3 === 0 ? 'text-blue-600' : index % 3 === 1 ? 'text-green-600' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium text-gray-800"> {suggestion.replace(/^\\d+\\.\\s*/, "")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 5. Action Plan (if available) */}
                        {aiAnalysis?.actionPlan && (
                            <div>
                                <h3 className="text-lg font-semibold text-purple-700 mb-4 border-b pb-2 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    Proposed Treatment Plan
                                </h3>
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {aiAnalysis.actionPlan.map((item, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.action}</td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">{item.details}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.timeline}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-2 py-1 text-xs rounded-full ${item.priority === 'High' ? 'bg-red-100 text-red-800' :
                                                            item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                                                'bg-green-100 text-green-800'
                                                            }`}>
                                                            {item.priority}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t px-6 py-4 bg-gray-50 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                        AI-generated analysis - For professional review only
                    </div>
                    <div className="flex space-x-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            Close
                        </button>
                        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center">
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                ></path>
                            </svg>
                            Export Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyzeAi;