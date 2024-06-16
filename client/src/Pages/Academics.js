import photo4 from "../Images/academics.jpg";

export default function Academics() {
  return (
    <div className="bg-gray-100 mt-20 min-h-screen">
      <div className="relative mb-5">
        <img
          src={photo4}
          alt="Academics"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          Programs Offered
        </div>
      </div>
      <div className="p-10 md:p-20 gap-10">
        <div>
          <h2 className="text-3xl mb-2">Our Commitment</h2>
          <p>
            At Vitality Academy, we believe that our strength lies in our people. Our dedicated team of educators and staff are the backbone of our success, delivering exceptional education and fostering an environment of excellence. We are committed to identifying and nurturing the best talent, providing them with opportunities for growth and advancement.
          </p>
        </div>
        <div>
          <h2 className="text-3xl mb-2">Inspiring Excellence</h2>
          <p>
            Our mission is to provide a comprehensive educational experience that promotes intellectual, moral, and holistic development in our students. At Vitality Academy, we cater to the unique needs and aspirations of each learner, empowering them to become confident, compassionate, and competent individuals ready to excel in today's dynamic world. Explore our programs:
          </p>
        </div>
        <div>
          <h2 className="text-3xl mb-2">1. Brainy Stars</h2>
          <p>
            Brainy Stars is designed for our youngest learners, from Nursery to Montessori levels 1 through 3. Our Montessori environment encourages independence, empathy, and a love for lifelong learning, preparing students to think critically and collaborate effectively.
          </p>
          <ol className="list-decimal ml-5">
            <li>Nursery</li>
            <li>Montessori Level 1</li>
            <li>Montessori Level 2</li>
            <li>Montessori Level 3</li>
          </ol>
        </div>
        <div>
          <h2 className="text-3xl mb-2">2. Primary Program</h2>
          <p>
            Our Primary Program builds a strong foundation in core subjects while nurturing creativity and curiosity. We focus on developing critical thinking skills and fostering a collaborative learning environment.
          </p>
          <ol className="list-decimal ml-5">
            <li>Grades 1 to 5</li>
            <li>Interactive Learning Modules</li>
            <li>Project-Based Assessments</li>
          </ol>
        </div>
        <div>
          <h2 className="text-3xl mb-2">3. Secondary Program</h2>
          <p>
            The Secondary Program at Vitality Academy prepares students for higher education and future careers. We emphasize academic excellence, leadership development, and global awareness.
          </p>
          <ol className="list-decimal ml-5">
            <li>Grades 6 to 10</li>
            <li>Advanced Curriculum</li>
            <li>Leadership and Skill Development</li>
            <li>Extracurricular Activities</li>
          </ol>
        </div>
        <div>
          <h2 className="text-3xl mb-2">4. Pre-University Program</h2>
          <p>
            Our Pre-University Program is designed for students aiming for top-tier universities and competitive exams like IIT JEE Mains and NEET. We provide intensive coaching, expert guidance, and comprehensive resources to help students achieve their goals.
          </p>
          <ol className="list-decimal ml-5">
            <li>Grades 11 and 12</li>
            <li>IIT JEE Mains and NEET Preparation</li>
            <li>Expert Faculty</li>
            <li>Personalized Mentoring</li>
          </ol>
        </div>
        <p className="mt-4 font-bold text-lg">
          At Vitality Academy, we strive to nurture young minds, equipping them with the knowledge, skills, and values to navigate the complexities of the modern world with confidence and integrity. Join us in shaping tomorrow's leaders today.
        </p>
      </div>
    </div>
  );
}
