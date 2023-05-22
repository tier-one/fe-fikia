'use client'


const ContactBtn=({text})=>{

return (
    <div className='w-full md:w-80 flex flex-col mt-4'>

        <button className="bg-blue-900  text-white font-bold py-2 px-4 rounded-lg">
            {text}
        </button>
    </div>

)
}

export default ContactBtn