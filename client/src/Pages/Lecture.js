import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Typography, Card } from "@material-tailwind/react";

export function LectureCard({ driveUrl, heading1, heading2, id, onDelete }) {
  const handelDeleteLecture = async () => {
    try {
      const response = await fetch(`http://localhost:8000/deletLecture/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        //after deleting the note, fetch all notes again to update the UI
        onDelete(id);
      } else {
        console.error("Failed to delete Lecture:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to delete Lecture:", error);
    }
  };

  return (
    <Card className=" h-30  overflow-hidden">
      <div className="p-2">
        <div className="flex justify-between">
        <Typography as="h2" variant="h4" className="mb-2">
          {heading1}
        </Typography>
        <button className=" h-7 w-6 rounded-2xl" onClick={handelDeleteLecture}>
          <MdDelete className="h-7 text-red-800 w-8" />
        </button>
        </div>
        <Typography as="p" variant="body2" className="mb-4">
          {heading2}
        </Typography>
        <div className="drive-preview">
          <iframe
            src={driveUrl}
            title="Drive Preview"
            className="drive-iframe content-center overflow-hidden"
            allow="autoplay"></iframe>
        </div>
        <a
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline 
          block cursor-pointer">
          View Link
        </a>
      </div>
    </Card>
  );
}
export function LecturesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [lecturedata, setlecturedata] = useState;
  const [formData, setFormData] = useState({
    driveUrl: "",
    subject: "",
    topic: "",
  });
  const [lecture, setlecture] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModel = () => setIsModalOpen(false);
  const fetchlecture = async () => {
    try {
      const response = await fetch("http://localhost:8000/getallLecture");
      if (response.ok) {
        const data = await response.json();
        setlecture(data);
        console.log(lecture);
      } else {
        console.log("Failed to display lecture:", response.statusText);
      }
    } catch (error) {
      console.log("Error fetching lecture :", error);
    }
  };
  useEffect(() => {
    fetchlecture();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handelDeleteLecture = async (id) => {
    setlecture((prevLecture) =>
      prevLecture.filter((lecture) => lecture._id !== id)
    );
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/postLectures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the note is successfully added, fetch all notes again to update the UI
        const updatedlecture = await fetch(
          "http://localhost:8000/getallLecture"
        ).then((res) => res.json());
        setlecture(updatedlecture);
        closeModel();
      } else {
        console.error("Failed to add Lecture:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };
  return (
    <div className="flex flex-col mt-20 ">
            <div className="text-3xl text-center p-5 bg-gray-300">
         Feature  Lectures
      </div> 
      <div className=" flex justify-center my-5 item-center gap-4 flex-wrap">
        {lecture.map((lecture, index) => (
          <LectureCard
            key={lecture._id}
            id={lecture._id}
            driveUrl={lecture.driveUrl}x
            heading1={lecture.topic}
            heading2={lecture.subject}
            onDelete={handelDeleteLecture}
          />
        ))}
      </div>
      <div className="flex items-center  bottom-auto w-full p-5">
        <button className="add-note-btn w-fit" onClick={openModal}>
          Add Lecture
        </button>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-btn" onClick={closeModel}>
                &times;
              </span>
              <form onSubmit={handleSubmit} className="modal-content px-10">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="p-2 border-dashed"
                />
                <input
                  type="text"
                  placeholder="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="p-2 border-dashed"
                />
                <input
                  type="text"
                  placeholder="Drive URL"
                  name="driveUrl"
                  value={formData.driveUrl}
                  onChange={handleChange}
                  required
                  className="p-2 border-dashed"
                />
                <div className="flex gap-4 text-center justify-center item-center">
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
                    Add Lecture
                  </button>{" "}
                  <button
                    className="submit-btn bg-red-800"
                    onClick={closeModel}>
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
