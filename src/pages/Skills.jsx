import React from 'react'

const Skills = () => {
    const aboutParaStyle = 'bg-gray-300 text-gray-800 px-3 py-1 rounded-lg text-sm sm:text-base font-sans font-semibold hover:scale-105 transition whitespace-nowrap'
    const skillData = [
        {
            title: 'Languages',
            items: ['JavaScript', 'TypeScript']
        },
        {
            title: 'Frameworks/Libraries',
            items: ['React.js', 'Node.js', 'Tailwind CSS']
        },
        {
            title: 'Cloud/DevOps',
            items: ['Github', 'Vercel']
        },
        {
            title: 'Concepts',
            items: ['System Design', 'Responsive Website Development', 'React.js Applications']
        },
    ]
  return (
    <div className='space-y-5'>
        {skillData.map((item)=>(
            <div key={item.title}>
                <h4 className='font-bold text-base sm:text-lg mb-2'>{item.title}</h4>
                <div className='flex flex-wrap gap-2 sm:gap-3'>
                    {item.items.map((skill)=>(
                        <p key={skill} className={aboutParaStyle}>{skill}</p>
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Skills