import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen sm:h-full py-5 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
        <div className="pb-7 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
        I am an undergraduate with a strong passion for software development and a keen interest in the exciting world of machine learning. 🚀

        💻 Proficient in C/C++ and Python, I have honed my programming skills to deliver efficient and innovative solutions. Through diverse projects, I have gained valuable insights into the art of crafting clean and understandable code.
        </p>

        <br />

        <p className="text-xl">
        🧠 As an avid problem solver, I actively engage in sharpening my analytical thinking and algorithmic prowess. I consistently tackle challenging Data Structures and Algorithms problems on various coding platforms.

🌐 My thirst for knowledge extends to the dynamic domain of web development. I am currently immersed in the world of web technologies, learning and expanding my skill set to create captivating web experiences.
        </p>
      </div>
    </div>
  )
}

export default About
