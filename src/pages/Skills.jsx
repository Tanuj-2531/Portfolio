import React from 'react'

const Skills = () => {
    const aboutParaStyle = 'bg-gray-300 text-gray-800 px-2 rounded-lg font-sans font-semibold'
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
    <div className='space-y-4'>
        {skillData.map((item)=>(
            <div key={item.title}>
                <h4 className='font-bold text-lg'>{item.title}</h4>
                <div className='flex flex-wrap justify-start items-center gap-4'>
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