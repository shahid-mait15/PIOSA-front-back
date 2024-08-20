import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";

function OptionInnerPage2() {
  const [activeStep, setActiveStep] = useState(null);
  const [selectedOption, setSelectedOption] = useState("no");

  const handleKnowMoreClick = (step) => {
    if (step === 3) {
      setSelectedOption("no"); // Reset selectedOption when Step-3 is activated
    }
    setActiveStep(activeStep === step ? null : step);
  };

  const handleOptionChange = (option) => {
    if (option === "yes") {
      setActiveStep(null); // Deactivate Step-1 when "Yes" is clicked in Step-2
    }
    setSelectedOption(option);
  };

  return (
    <>
      <div className="h-screen">
     
        <div className="flex gap-6 w-full justify-center p-5">
          {/* Step 1 */}
          <div
  className={`rounded-2xl shadow-md p-6 justify-center py-6 px-16 bg-white border ${
    activeStep === 1
      ? "border-green-600 border-2 bg-gradient-to-r from-pink-50 via-pink-50 to-blue-50"
      : "border-gray-300"
  }`}
>
  <p className="font-semibold text-lg">Step-1</p>
  <div className="flex items-center justify-center p-6">
    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
      <FaFileDownload className="text-green-600" />
    </div>
    <div className="ml-4">
      <h2 className="text-sm font-semibold text-gray-800">
        Let's get started by
      </h2>
      <p className="text-gray-600">
        <a className="text-blue-500 cursor-pointer hover:underline">Downloading CFT.</a>
      </p>
    </div>
  </div>
  <p
    className="w-full text-blue-400 font-semibold text-end text-sm mt-3 cursor-pointer hover:text-blue-600"
    onClick={() => handleKnowMoreClick(1)}
  >
    Read More
  </p>
</div>


          {/* Step 2 */}
          <div
            className={`rounded-2xl shadow-md p-6 w-112  bg-white border ${
              activeStep === 2 ? "border-blue-500" : "border-gray-300"
            }`}
          > 
            <p className="font-semibold">Step-2</p>
            <div className="flex items-center p-10">
              <div className="ml-4">
                <h2 className=" text-sm font-semibold text-gray-800">
                Have you finished with the CFT deployment 
                     provided in step 1
                </h2>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="relative w-24 h-8 bg-white border border-black rounded-full flex items-center cursor-pointer">
                      {/* Slider background */}
                      <div
                        className={`absolute top-0 left-0 h-full w-1/2 rounded-full transition-transform duration-300 ${
                          selectedOption === "yes"
                            ? "translate-x-full bg-lime-500"
                            : ""
                        }`}
                      ></div>
                      {/* "No" Button */}
                      <button
                        className={`w-1/2 h-full rounded-full z-10 focus:outline-none ${
                          selectedOption === "no"
                            ? "text-gray-800 bg-red-500"
                            : "text-gray-800"
                        }`}
                        onClick={() => handleOptionChange("no")}
                      >
                        No
                      </button>
                      {/* "Yes" Button */}
                      <button
                        className={`w-1/2 h-full rounded-full z-10 focus:outline-none ${
                          selectedOption === "yes"
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                        onClick={() => handleOptionChange("yes")}
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <p
              className="w-full text-blue-400 font-semibold text-end cursor-pointer"
              onClick={() => handleKnowMoreClick(2)}
            >
              Know More
            </p> */}
          </div>

          {/* Step 3 */}
          <div
            className={`rounded-2xl shadow-md p-6 justify-center py-5 bg-white border ${
              activeStep === 3
                ? "border-green-600 border-2 bg-gradient-to-r from-pink-50 via-pink-50 to-blue-50"
                : "border-gray-300"
            }`}
          >
           <div className=" flex w-full ">
           <p className="font-semibold mx-1">Step-3</p>
           <h1 className=" font-medium text-gray-600">(Optional)</h1>
           </div>
            <div className="flex items-center justify-center p-10">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <FaFileDownload className="justify-center" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-semibold text-gray-800">
                  Storage Cost Optimizer Script
                </h2>
                <p className="text-gray-600">
                  <a className="text-blue-500">Optimizer Script</a>
                </p>
              </div>
            </div>
            <p
              className="w-full text-blue-400 font-semibold text-end  text-sm mt-3 cursor-pointer"
              onClick={() => handleKnowMoreClick(3)}
            >
              Read More
            </p>
          </div>




        </div>

        <div className="w-full bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100 border rounded-md shadow-lg">
          {activeStep === 1 && (
            <div className="items-center justify-center p-10">
              <p className="text-2xl font-bold py-3">Instruction Manual​</p>
              <p>
                <span className="font-bold">Step-1</span> Download the
                CloudFormation template(CFT) from our Website..​
                <br />
                ​<br />
                <span className="font-bold">Step-2</span> Upload the downloaded
                CloudFormation template to your S3 bucket in your AWS account
                where you want to use the PIOSA product.​​
                <br />
                ​​ Ensure you have downloaded the required CloudFormation
                template file to your local machine.​​
                <br />
                ​ Log in to AWS Management Console: ​​
                <br />
                Open your web browser and navigate to the AWS Management
                Console.​​
                <br />
                Enter your AWS account credentials to log in.​​
                <br />
                ​ Navigate to S3 Service: ​​
                <br />
                In the AWS Management Console, type "S3" in the search bar on
                the top of the page.​​
                <br />
                Select "S3" from the search results to open the Amazon S3
                console.​​
                <br />
                ​ Select or Create an S3 Bucket: ​​
                <br />
                If you already have an S3 bucket where you want to store the
                CloudFormation template, select that bucket from the list.​​
                <br />
                If you need to create a new bucket, click on the "Create bucket"
                button and follow the prompts to create a new S3 bucket.​​
                <br />
                ​5. Upload the CloudFormation Template: ​​
                <br />
                Open the selected S3 bucket by clicking on its name.​​
                <br />
                Click the "Upload" button to start the upload process.​​
                <br />
                In the "Upload" dialog, click "Add files" and select the
                CloudFormation template file you downloaded earlier.​​
                <br />
                Click "Upload" to upload the file to your S3 bucket.​​
                <br />
                ​ Once the upload is complete, verify that the CloudFormation
                template file appears in the list of objects in your S3
                bucket.​​
                <br />
                ​<br />
                <span className="font-bold">Step-3</span> Retrieve the
                CloudFormation template that you uploaded in the previous step
                from your S3 bucket. ​<br /> And execute/deploy it to construct
                the CFT-based architecture. And customers need to create their
                own subnets.​​
                <br/><br/>
                <span className=" font-bold mx-1">Step-4</span>
                 Once you finished with step1 then click on yes button on the step2 and provide us<br/>  your AWS account id so that we can share the AMI with you. 
              </p>
            </div>
          )}
        </div>

        <div className=" w-full  bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100 border  rounded-md shadow-md">
          {activeStep === 3 && (
            <div className="mt-4 p-4  rounded-lg">
              <div className="items-center justify-center p-10">
                <p className="text-2xl font-bold py-3">Instruction Manual​</p>
                <p>
                  <span className="font-bold">Step-1</span> Download the
                  CloudFormation template(CFT) from our Website..​
                  <br />
                  ​<br />
                  <span className="font-bold">Step-2</span> Upload the
                  downloaded CloudFormation template to your S3 bucket in your
                  AWS account where you want to use the PIOSA product.​​
                  <br />
                  ​​ Ensure you have downloaded the required CloudFormation
                  template file to your local machine.​​
                  <br />
                  ​ Log in to AWS Management Console: ​​
                  <br />
                  Open your web browser and navigate to the AWS Management
                  Console.​​
                  <br />
                  Enter your AWS account credentials to log in.​​
                  <br />
                  ​ Navigate to S3 Service: ​​
                  <br />
                  In the AWS Management Console, type "S3" in the search bar on
                  the top of the page.​​
                  <br />
                  Select "S3" from the search results to open the Amazon S3
                  console.​​
                  <br />
                  ​ Select or Create an S3 Bucket: ​​
                  <br />
                  If you already have an S3 bucket where you want to store the
                  CloudFormation template, select that bucket from the list.​​
                  <br />
                  If you need to create a new bucket, click on the "Create
                  bucket" button and follow the prompts to create a new S3
                  bucket.​​
                  <br />
                  ​5. Upload the CloudFormation Template: ​​
                  <br />
                  Open the selected S3 bucket by clicking on its name.​​
                  <br />
                  Click the "Upload" button to start the upload process.​​
                  <br />
                  In the "Upload" dialog, click "Add files" and select the
                  CloudFormation template file you downloaded earlier.​​
                  <br />
                  Click "Upload" to upload the file to your S3 bucket.​​
                  <br />
                  ​ Once the upload is complete, verify that the CloudFormation
                  template file appears in the list of objects in your S3
                  bucket.​​
                  <br />
                  ​<br />
                  <span className="font-bold">Step-3</span> Retrieve the
                  CloudFormation template that you uploaded in the previous step
                  from your S3 bucket. ​<br /> And execute/deploy it to
                  construct the CFT-based architecture. And customers need to
                  create their own subnets.​​
                </p>
              </div>
            </div>
          )}
        </div>

        <div className=" w-full justify-center text-center">
          {selectedOption === "yes" && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
              To obtain AMI, just enter your AWS account ID.
              </h2>
             <div className=" flex w-full text-center justify-center">
             <input
                type="text"
                placeholder="Enter AWS Account ID"
                className="border-2 shadow-md rounded p-2 mt-2 w-1/4  border-gray-800 "
              />
              <button className=" px-5 mx-1 bg-lime-500 text-black text-md rounded-md border-2 font-semibold   h-11 mt-2 mx-3 border-gray-800 hover:rounded-full">Get AMI</button>
             </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OptionInnerPage2;
