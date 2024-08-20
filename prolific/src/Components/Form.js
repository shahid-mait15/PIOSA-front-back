import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer, Slide } from "react-toastify";
import downloadQuestionsExcel from '../assets/PIOSA-Questions 2.xlsx'

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showDynamicFields, setShowDynamicFields] = useState(false);
  const navigate = useNavigate(); // Corrected this line
  const [formData, setFormData] = useState({
    frequency: "",
    time: "",
    details: "",
  });
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const schema = yup.object().shape({
    // Add your validation schema here
  });

  const generateTimeOptions = () => {
    const times = [];
    let hour = 1;
    let period = "AM";
    while (!(hour === 1 && period === "PM")) {
      times.push(`${hour}:00 ${period}`, `${hour}:30 ${period}`);
      if (hour === 12) {
        period = period === "AM" ? "PM" : "AM";
      }
      hour = hour === 12 ? 1 : hour + 1;
    }
    times.push("1:00 PM");
    return times;
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("/thank-you"); // Correctly invoke navigate
      }, 3000); // 3 seconds delay for the toast to be displayed
      return () => clearTimeout(timer); // Clear the timer on component unmount
    }
  }, [submitted, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("IOPS_Threshold_for_Scaling", data.IOPS_Threshold_for_Scaling);
    formData.append("Expected_Peak_IOPS", data.Expected_Peak_IOPS);
    formData.append("Dynamic_IOPS_Configuration", data.Dynamic_IOPS_Configuration);
    formData.append("frequency", data.frequency); 
    formData.append("time", data.time); 
    formData.append("Default_VPC", data.Default_VPC); 
    formData.append("Security_Group_Name", data.Security_Group_Name); 
    formData.append("Placement_Group_Name", data.Placement_Group_Name);
    formData.append("AWS_Region", data.AWS_Region);
    formData.append("CPU_Threshold_for_Dynamic_IOPS", data.CPU_Threshold_for_Dynamic_IOPS);
    formData.append("PIOSA_Server_Name", data.PIOSA_Server_Name);
    formData.append("PIOSA_Server_Login_Details", data.PIOSA_Server_Login_Details);
    formData.append("Accelerated_Server_Name", data.Accelerated_Server_Name); 
    formData.append("Count_of_EBS_Volumes", data.Count_of_EBS_Volumes); 
    formData.append("Total_EBS_Volume_Size", data.Total_EBS_Volume_Size);
    formData.append("VPC_CIDR", data.VPC_CIDR);

    if (data.dpic && data.dpic[0]) {
      formData.append("dpic", data.dpic[0]);
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/Form", {
        method: "POST",
        body: formData,
      });

      const responseBody = await response.json();

      console.log("Response Status:", response.status);
      console.log("Response Body:", responseBody);

      if (response.ok) {
        toast.success("Data saved successfully!", {
          position: "top-center",
          transition: Slide,
        });
        reset();
        setSubmitted(true);
      } else {
        const errorMessage = responseBody.message || "Failed to save data.";
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error(error.message || "Failed to save data.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen  border">
       <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)} action="/upload" method="POST" enctype="multipart/form-data"
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl relative"
      >
        <h3 className="font-bold text-center text-xl">
          Answer the questions below with respect to the application for
          Prolific I/O
        </h3>
        <p className="text-center text-sm">
          Please click on the 'Info' for the Information and{" "}
          <Link to="/contact-us" className="text-blue-500 underline">
            contact us
          </Link>{" "}
          if you would like to speak to our SME
        </p>
        <div className="flex gap-4 mt-6">
          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6">
              Performance and Scaling
            </h2>
            <div className="border p-4 rounded shadow">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  IOPS Threshold for Scaling:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  1. What is the IOPS threshold to trigger scaling?
                 
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1NnMpam2IvrlOskUMs5GiP4kHA0NN-t72/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="IOPS_Threshold_for_Scaling"
                  {...register("IOPS_Threshold_for_Scaling")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Expected Peak IOPS:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  2. Specify the expected peak IOPS (e.g., 200,000 - 300,000
                  IOPS per 250GB).
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/11rHPZp2-F9eFbdGAiQuP-1z1DoJZx0QA/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="Expected_Peak_IOPS"
                  {...register("Expected_Peak_IOPS")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Similar blocks for other fields */}

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Dynamic IOPS Configuration:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  3. Do you need dynamic IOPS to be configured for specific
                  times of the day, week, or month? If yes, please define the
                  frequency and time.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1lpiaRzsH2k4bkcBaoNE9Toc5VKVwQY4i/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>

                <select
                  {...register("Dynamic_IOPS_Configuration")}
                  id="Dynamic_IOPS_Configuration"
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500 mb-2"
                  onChange={(e) =>
                    setShowDynamicFields(e.target.value === "yes")
                  }
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                {showDynamicFields && (
                  <div>
                    <label htmlFor="frequency" className="text-sm">
                      Select Frequency:
                    </label>
                    <select
                      id="frequency"
                      value={formData.frequency}
                      {...register("frequency")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500 mb-2"
                    >
                      <option value="">Select Frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>

                    <label htmlFor="time" className="text-sm mt-2">
                      Select Time:
                    </label>
                    <select
                      id="time"
                      value={formData.time}
                      {...register("time")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500 mb-2"
                    >
                      <option value="">Select Time</option>
                      {generateTimeOptions().map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>

                    <input
                      type="text"
                      value={formData.details}
                      onChange={(e) => handleChange("details", e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500 mb-2"
                      placeholder="Specify additional details"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6">
              Network and Security Configuration
            </h2>
            <div className="border p-4 rounded shadow">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Default VPC:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  4. Specify the name of the default VPC for the accelerated
                  workload.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1Ms7QMxQYtAO2x2sWqHREWVuHZ8SfTIHU/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="Default_VPC"
                  {...register("Default_VPC")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Security Group Name:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  <br></br>
                  5. Provide the name of the security group.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1ksnw-EOonHCE1h9Ur_Uc9M1HF99zNmUM/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="Security_Group_Name"
                  {...register("Security_Group_Name")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Placement Group Name:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  6. Provide the name of the placement group.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1Dqh9d7H9w-hD933bo4Frp6Fi1YmeUOmf/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="Placement_Group_Name"
                  {...register("Placement_Group_Name")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6">
              AWS Account Information
            </h2>
            <div className="border p-4 rounded shadow">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  AWS Region:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  7. Indicate the AWS region to be used.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1SOlthGpSujM9sXbnIQ2xxo5U1NvfXWq1/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  {...register("AWS_Region")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6">
              CPU Performance
            </h2>
            <div className="border p-4 rounded shadow">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  CPU Threshold for Dynamic IOPS:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  8. What CPU threshold should trigger dynamic IOPS scaling?
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1ONORhtJkhKY-Pp-bGEGV5RUhIgQbfJqK/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="CPU_Threshold_for_Dynamic_IOPS"
                  {...register("CPU_Threshold_for_Dynamic_IOPS")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6">
              Server Details
            </h2>
            <div className="border p-4 rounded shadow">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  PIOSA Server Name:
                </label>
                <p className="text-xs mb-2 flex">
                  9. Provide the name of the PIOSA server.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1NnMpam2IvrlOskUMs5GiP4kHA0NN-t72/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="PIOSA_Server_Name"
                  {...register("PIOSA_Server_Name")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  PIOSA Server Login Details:
                </label>
                <p className="text-xs mb-2 flex">
                  10. Provide the public IP address of the PIOSA server and upload
                  the .pem Key file.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1NnMpam2IvrlOskUMs5GiP4kHA0NN-t72/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  placeholder="Server Public IP Address"
                  {...register('PIOSA_Server_Login_Details')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="file"
                  name="pemkey"
                  placeholder=".PEM Key"
                  {...register('dpic')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mt-4 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Accelerated Server Name:
                </label>
                <p className="text-xs mb-2 flex">
                  11. Provide the name of the accelerated server.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1NnMpam2IvrlOskUMs5GiP4kHA0NN-t72/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="Accelerated_Server_Name"
                  {...register("Accelerated_Server_Name")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6">
              Storage Configuration
            </h2>
            <div className="border p-4 rounded shadow">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Count of EBS Volumes:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  12. How many EBS volumes are needed?
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1L9kdBYCS_CSUfIV-kGbAVjH35jYwjGXV/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="Count_of_EBS_Volumes"
                  {...register("Count_of_EBS_Volumes")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Total EBS Volume Size:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  13. Specify the total size of all EBS volumes.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1NnMpam2IvrlOskUMs5GiP4kHA0NN-t72/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="Total_EBS_Volume_Size"
                  {...register("Total_EBS_Volume_Size")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>


              
            </div>
          </div> */}

<div className="w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6">
              Storage Configuration
            </h2>
            <div className="border p-4 rounded shadow">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Count of EBS Volumes:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  12. How many EBS volumes are needed?
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1L9kdBYCS_CSUfIV-kGbAVjH35jYwjGXV/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="Count_of_EBS_Volumes"
                  {...register("Count_of_EBS_Volumes")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  Total EBS Volume Size:
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  13. Specify the total size of all EBS volumes.
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1NnMpam2IvrlOskUMs5GiP4kHA0NN-t72/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="Total_EBS_Volume_Size"
                  {...register("Total_EBS_Volume_Size")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-0 text-sm">
                  VPC CIDR
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <p className="text-xs mb-2 flex">
                  14. VPC CIDR Range
                  <span className="text-blue-500 underline flex items-center pl-2">
                    <a
                      href="https://drive.google.com/file/d/1NnMpam2IvrlOskUMs5GiP4kHA0NN-t72/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Info
                    </a>
                  </span>
                </p>
                <input
                  type="text"
                  id="VPC_CIDR"
                  {...register("VPC_CIDR")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>




          
        </div>



        
        <button
        type="submit"
        onClick={downloadQuestionsExcel}
        className="absolute bottom-8 right-8  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-24 rounded focus:outline-none focus:shadow-outline"
      >
          Download Questionnaire in Excel
        </button>
        <button
              type="button"
            
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8 cursor-pointer"
            >
              Download Questionnaire PDF
            </button>
        <button
        type="submit"
        className="absolute bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
