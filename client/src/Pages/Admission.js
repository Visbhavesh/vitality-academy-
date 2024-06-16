import React from "react";
import photo5 from "../Images/admission.jpg";

export default function Admissionsection() {
  return (
    <div className="bg-gray-100 mt-20 min-h-screen">
      <div className="relative mb-5">
        <img
          src={photo5}
          alt="Admission Guidelines"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          Admission Guidelines
        </div>
      </div>

      <div className="p-10">
        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-4 text-center">Admission Guidelines</h1>
          <h2 className="text-3xl mb-4 text-center">For Admission to JEE and NEET</h2>
          <p className="text-xl text-center mb-8">Vitality Academy</p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Introduction</h3>
          <p className="text-lg leading-relaxed">
            The school was founded with the goal of providing education to the educationally disadvantaged community at large, with a specific focus on the Muslim Community. Nevertheless, admission is available to children from all communities, irrespective of caste, creed, or religion.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">School Uniform</h3>
          <p className="text-lg leading-relaxed">
            The school has prescribed a uniform for admitted students. The details of the prescribed school uniform are provided to the candidates at the time of admission from the school.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Essential Guidelines and Regulations</h3>
          <p className="text-lg leading-relaxed mb-4">
            Vital details and regulations concerning admission for the session 2024-25 are outlined below and are integral components of the Admission Guide. This guide is accessible for viewing and downloading on our website:
            <a href="https://vitalacadmey.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
              <b>
                <u>vitalacadmey.com</u>
              </b>
            </a>. Applicants and their parents/guardians are advised to thoroughly review the admission guidelines, and it will be presumed that they consent to comply with these guidelines upon application.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Registering as a New User</h3>
          <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
            <li>The candidate should register online and provide their correct and functional email because the username and password, among other details, will be sent to this email exclusively.</li>
            <li>Please be aware that each candidate is required to register individually and will receive a unique username and password. These credentials will grant access to the candidate's Dashboard for both form completion and tracking purposes.</li>
            <li>Only a single registration is necessary for a candidate applying to a class, encompassing both the General Category and the special category.</li>
          </ol>

          <table className="table-auto w-full mb-10">
            <thead>
              <tr>
                <th className="border px-4 py-2">S.No.</th>
                <th className="border px-4 py-2">Registration</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Username</td>
                <td className="border px-4 py-2">Choose a username</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Password</td>
                <td className="border px-4 py-2">Enter your password</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Re-Enter Password</td>
                <td className="border px-4 py-2">Re-enter your password</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">Email</td>
                <td className="border px-4 py-2">Enter your valid & functional email address</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">Name of the Candidate</td>
                <td className="border px-4 py-2">Enter the full name of the candidate in capital letters. Do not use Mr/Master/Ms/Miss etc. before the name.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Accessing a Registered Account</h3>
          <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
            <li>The candidate should log in using their assigned username and password. The candidate will then have access to their dashboard for completing the form.</li>
            <li>If the candidate has misplaced or forgotten their password, they should utilize the "Forgot Password" link to retrieve it, and the information will be sent to the registered email address.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Updating Candidate's Profile</h3>
          <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
            <li>The candidate needs to meticulously complete their profile, ensuring that all fields marked with an asterisk are filled in, as they are mandatory.</li>
            <li>Upon saving the Profile, the candidate shall be prompted to review and confirm that the entered particulars are accurate.</li>
            <li>Once the candidate has confirmed, they will be unable to edit or update their profile.</li>
            <li>If a candidate identifies any error in their profile after confirmation, they will need to initiate a new registration with a different username and password to complete all entries anew.</li>
          </ol>

          <table className="table-auto w-full mb-10">
            <thead>
              <tr>
                <th className="border px-4 py-2">S.No.</th>
                <th className="border px-4 py-2">Profile</th>
                <th className="border px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Username*</td>
                <td className="border px-4 py-2">Prefilled as given at the time of registration</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Email*</td>
                <td className="border px-4 py-2">Prefilled as given at the time of registration</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Name of the Candidate*</td>
                <td className="border px-4 py-2">Prefilled as given at the time of registration</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">Alternate Email</td>
                <td className="border px-4 py-2">Specify an alternate email of the candidate</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">5</td>
                <td className="border px-4 py-2">Aadhaar No</td>
                <td className="border px-4 py-2">Specify the AADHAAR number of the candidate</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">6</td>
                <td className="border px-4 py-2">Mother's Name*</td>
                <td className="border px-4 py-2">Enter the full name of the candidate's mother in capital letters. Do not use Mrs./Smt. before the name.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">7</td>
                <td className="border px-4 py-2">Father's Name*</td>
                <td className="border px-4 py-2">Enter the full name of the candidate's father in capital letters. Do not use Mr./Shri before the name.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">8</td>
                <td className="border px-4 py-2">Date of Birth (DOB)*</td>
                <td className="border px-4 py-2">Select the correct date of birth from the drop-down menu as mentioned in the DOB certificate of the candidate.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Selection of Class</h3>
          <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
            <li>After saving the profile, the candidate should select the class in which they are seeking admission.</li>
            <li>If a candidate has already submitted a form but desires to apply to another class, a new registration must be completed with a different username and password.</li>
            <li>It is important to note that if multiple applications are submitted for the same class, only the last application will be considered valid, and a fresh registration will need to be completed.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Uploading Documents</h3>
          <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
            <li>Subsequent to selecting the class, the candidate must upload the necessary documents.</li>
            <li>The list of mandatory documents required for submission is provided on the school’s official website.</li>
            <li>All documents should be scanned and uploaded in JPEG or PDF format. Ensure that the file size does not exceed the specified limit.</li>
            <li>Once the documents are uploaded, they will be verified by the school’s admission committee. If any discrepancies are found, the candidate will be notified via email and requested to upload the correct documents.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Payment of Fees</h3>
          <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
            <li>Upon successful submission of the form and documents, the candidate will be directed to the payment gateway to pay the admission fees.</li>
            <li>The admission fees are non-refundable and must be paid online using the available payment methods.</li>
            <li>A receipt of the payment will be sent to the registered email address of the candidate.</li>
            <li>It is advisable to keep a copy of the payment receipt for future reference.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Confirmation of Admission</h3>
          <ol className="list-decimal list-inside text-lg leading-relaxed mb-4">
            <li>Once the payment is confirmed, the admission committee will review the application and documents.</li>
            <li>If everything is in order, a confirmation email will be sent to the candidate, along with further instructions regarding the commencement of classes and orientation programs.</li>
            <li>In case of any issues or additional requirements, the admission office will get in touch with the candidate through the registered email or phone number.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Important Notes</h3>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
            <li>Ensure that all information provided in the application form is accurate and verifiable.</li>
            <li>Read all instructions carefully before submitting the application.</li>
            <li>Keep a check on the registered email for any communication from the admission office.</li>
            <li>Adhere to the deadlines for submission of forms and payment of fees to avoid any inconvenience.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="text-lg leading-relaxed">
            For any queries or assistance regarding the admission process, please contact:
          </p>
          <p className="text-lg leading-relaxed">
            Vitality Academy Admission Office<br />
            Phone: +123 456 7890<br />
            Email: admissions@vitalityacademy.com<br />
            Website: 
            <a href="https://vitalacadmey.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
              <b><u>vitalacadmey.com</u></b>
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
