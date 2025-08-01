import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { supabase } from "../../supabaseClient"; // Import your Supabase client
import missionImage from "../assets/modern_home.jpg";
import teamMemberImagePlaceholder from "../assets/fashion.jpg"; // Placeholder if image not in DB
import expertiseImage from "../assets/photo_shoot.jpg";
import {
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaGlobeAfrica,
} from "react-icons/fa";

// {company values content}
const coreValues = [
  {
    icon: <FaLightbulb className="text-3xl text-white" />,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking to deliver cutting-edge technology solutions.",
  },
  {
    icon: <FaHandshake className="text-3xl text-white" />,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and a strong moral foundation in all we do.",
  },
  {
    icon: <FaUsers className="text-3xl text-white" />,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork to achieve shared goals and drive impact.",
  },
  {
    icon: <FaChartLine className="text-3xl text-white" />,
    title: "Growth",
    description:
      "We strive for personal and professional development while helping our communities thrive.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-white" />,
    title: "Trust",
    description:
      "We build strong, lasting relationships based on dependability and accountability.",
  },
  {
    icon: <FaGlobeAfrica className="text-3xl text-white" />,
    title: "Impact",
    description:
      "We are dedicated to making a measurable difference in Africa’s digital transformation journey.",
  },
];


const MissionVisionSection = () => {
  const [teamMembers, setTeamMembers] = useState([]); // State to hold fetched team members
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('team') // <--- IMPORTANT: Replace 'team_members' with your actual table name
          .select('id, name, position, profile_picture_url') // <--- IMPORTANT: Select your columns. 'image_url' should be the column storing the image URL
          .order('id', { ascending: true }); // Order by ID or any relevant column

        if (error) {
          throw error;
        }
        
        // Map data to ensure each member has an image. Use placeholder if image_url is null/undefined.
        const formattedTeamMembers = data.map(member => ({
            ...member,
            image: member.profile_picture_url || teamMemberImagePlaceholder // Use fetched URL or local placeholder
        }));
        setTeamMembers(formattedTeamMembers);
      } catch (error) {
        console.error("Error fetching team members:", error.message);
        setError("Failed to load team members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl text-blue-600 md:text-4xl font-bold text-center underline mb-12">
            Our Mission and Vision
          </h2>

          {/* Content Layout */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={missionImage}
                alt="Mission and Vision"
                className="w-lg h-100 rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2  space-y-8">
              {/* Mission */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  Our Mission
                </h3>
                <p className="text-blue-600">
                  To empower communities through cutting-edge technology,
                  fostering growth and innovation across the African continent.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  Our Vision
                </h3>
                <p className="text-blue-600">
                  To become a leading force in digital transformation, creating
                  sustainable solutions for a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>

        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl text-blue-600 font-bold text-center mb-12">
              Our Core Values
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 text-white sm:grid-cols-2 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-blue-700 p-6 rounded-3xl shadow hover:shadow-lg transition"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-white">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl text-blue-600 font-bold text-center mb-12">
              Our Leadership and Expert Team
            </h2>

            {/* Conditional Rendering: Show loading, error, or team members */}
            {loading && (
              <p className="text-center text-blue-600 text-xl">Loading team members...</p>
            )}
            {error && (
              <p className="text-center text-red-600 text-xl">{error}</p>
            )}
            {!loading && !error && teamMembers.length === 0 && (
              <p className="text-center text-gray-600 text-xl">No team members found.</p>
            )}

            {/* Grid of Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {!loading && !error && teamMembers.map((member, index) => (
                <div
                  key={index} // Use index only if order is static and items won't be reordered/deleted
                  className="bg-white p-6 rounded-lg text-center transition"
                >
                  <img
                    src={member.image} // Use image URL from database
                    alt={member.name}
                    className="w-50 h-50 xl:w-100 xl:h-100 mx-auto rounded-full object-cover mb-4 shadow-md"
                  />
                  <h5 className="text-xl font-semibold text-blue-800">
                    {member.name}
                  </h5>
                  <p className="text-blue-600 mt-1">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Main Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12">
              Why Choose Us
            </h2>

            {/* Content: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row items-start justify-start gap-10">
              {/* Left Content */}
              <div className="md:w-1/2 flex flex-col items-start">
                <h4 className="text-xl font-semibold mb-4 text-blue-800">
                  Our Expertise
                </h4>
                <p className="text-blue-800 max-w-xl">
                  With decades of combined experience, our team is dedicated to
                  delivering innovative solutions.
                </p>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2">
                <img
                  src={expertiseImage}
                  alt="Our Expertise"
                  className="w-100 h-90 shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MissionVisionSection;