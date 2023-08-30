import React from 'react'

const Experience = () => {

    const exp=[
        {
            id:1,
            role:'Teaching Assistant',
            company:'Coding Ninjas',
            duration:'Feb-2023 - Present',
            detail:'Working as an online teaching assistant (TA) for a variety of DSA and competitive programming batches, resulting in the resolution of over 500 questions. Debugging and locating problems in student-written code and maintaining the average rating of 4.8.'
        },
        {
            id:2,
            role:'Research Intern',
            company:'Delhi Technological University',
            duration:'June-2022 - Aug-2022',
            detail:'Led a team working on a computer vision-based project that can estimate the measurement of the entire body from an image.Recommended ways to improve efficiency, and quality of image processing with the concepts of image segmentation, contour detection and pixel per metric ratio.'
        }
    ];

  return (
    // wrapper
    <div name="experience" className='flex flex-col py-4 bg-gradient-to-b from-black to-gray-800 w-full md:h-screen sm:h-full'>
        {/* main */}
        <div className='max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full text-white'>
            <div className='my-20 pt-2'>
                <p className='text-4xl font-bold border-b-4 border-gray-500  p-2 mx-2 inline'>Experience</p>
                {/* <p className='py-6 pl-5'>This my internships i have done</p> */}
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 pb-4 text-center px-8 sm:px-0 '>
                {/* card */}

                {exp.map(({id, role, company, duration, detail})=>(
                    <div key={id} className=' w-auto p-6  hover:scale-105 duration-300 text-white rounded-tr-md rounded-bl-md rounded-br-lg shadow-lg shadow-gray-400'>
                        {/* role and duration */}
                        <div className='flex justify-between items-center my-4'>
                            <p className='font-bold '>{role}</p>
                            <p className=''>{duration}</p>
                        </div>
                        <p className=' text-start pb-4'>{company}</p>
                        <p className='pt-4 sm:text-sm border-t-2 border-white'>{detail}</p>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience
