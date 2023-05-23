'use client'


interface ButtonProps {
    text?: string
}

const ContactBtn = ({ text }: ButtonProps) => {

    return (
        <div className='flex flex-col mb-4'>

            <button className="bg-blue-900  text-white font-bold py-2 px-4 rounded-lg">
                {text}
            </button>
        </div>

    )
}

export default ContactBtn