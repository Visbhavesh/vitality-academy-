import { Card, Typography } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import React, { useEffect, useState } from "react";

export function ResultCardSection({
  imageurl,
  heading1,
  heading2,id,
  onDelete,
}) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/deleteResult/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If deletion is successful, call onDelete to update the UI
        onDelete(id);
      } else {
        console.error("Failed to delete result :", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting result ", error);
    }
  };
  return (
    <Card className=" h-30 shadow overflow-hidden">
      <div className="p-2">
        <div className="flex justify-between">
          <Typography as="h2" variant="h4" className="mb-2 space-between">
          {heading1}
          </Typography>
          <button className=" h-7 w-6 rounded-2xl" onClick={handleDelete}>
            <MdDelete className="h-7 text-red-800 w-8"/>
          </button>
        </div>
        <Typography as="p" variant="body2" className="mb-4">
        {heading2}
        </Typography>
        <div className="drive-preview">
          <iframe
            src={imageurl}
            title="Drive Preview"
            className="drive-iframe content-center overflow-hidden"
            allow="autoplay"></iframe>
        </div>
      </div>
    </Card>
  );
}
export function ResultCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    imageurl: "",
    studentname: "",
    rollno: "",
  });
  const [result, setresult] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const fetchResult = async () => {
    try {
      const response = await fetch("http://localhost:8000/getAllResults");
      if (response.ok) {
        const data = await response.json();
        setresult(data);
        console.log(result);
      } else {
        console.error("Failed to fetch resut:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
  useEffect(() => {
    fetchResult();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleDeleteResult = (id) => {
    // Update state by filtering out the deleted result
    setresult((prevResult) => prevResult.filter((result) => result._id !== id));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/postAllResult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the note is successfully added, fetch all notes again to update the UI
        const updateResult = await fetch(
          "http://localhost:8000/getAllResults"
        ).then((res) => res.json());
        setresult(updateResult);
        closeModal();
      } else {
        console.error("Failed to add result :", response.statusText);
      }
    } catch (error) {
      console.error("Error adding result ", error);
    }
  };

  return (
    <div className="flex flex-col  mt-20 my-4">
       <div className="text-3xl text-center text-gray-700 pt-5 bg-gray-300">
        Our Top Performer
        <p className="text-gray-700 text-xs  pb-3">Our Hard Work Play The Best  </p>
     
      </div> 
     
      <div className=" flex justify-center my-5 item-center gap-4 flex-wrap">
        {result.map((result, index) => (
          <ResultCardSection
            key={result._id}
            id={result._id}
            image={result.image}
            heading1={result.studentname}
            heading2={result.rollno}
            onDelete={handleDeleteResult}
          />
        ))}
      </div>
      <div className="flex items-center w-full p-5">
        <button className="add-note-btn w-fit" onClick={openModal}>
          Add Result
        </button>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-btn" onClick={closeModal}>
                &times;
              </span>
              <form onSubmit={handleSubmit} className="modal-content px-10">
                <input
                  type="text"
                  placeholder="Student Name"
                  name="studentname"
                  value={formData.studentname}
                  onChange={handleChange}
                  required
                  className="p-2 border-dashed"
                />
                <input
                  type="text"
                  placeholder="rollno"
                  name="rollno"
                  value={formData.rollno}
                  onChange={handleChange}
                  required
                  className="p-2 border-dashed"
                />
                <input
                  type="text"
                  placeholder="Image file "
                  name="imageurl"
                  value={formData.imageurl}
                  onChange={handleChange}
                  required
                  className="p-2 border-dashed"
                />
                <div className="flex gap-4">
                  {" "}
                  <button
                    className="submit-btn"
                    type="submit"
                    onClick={() => {
                      const isAdmin =
                        localStorage.getItem("username") === "yug" || "BHAVESH";

                      if (isAdmin) {
                        console.log("hello admin");
                      } else {
                        console.log("hello normal user");
                      }
                    }}>
                    Add Result
                  </button>{" "}
                  <button
                    className="submit-btn bg-red-800"
                    onClick={closeModal}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
