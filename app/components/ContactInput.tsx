'use client'
const ContactInput = ({labelText,value,name,placeholder, handleChange}) => {
  return (
      <div className='w-full md:w-80 flex flex-col mb-4'>
          <label className="text-gray-500">{labelText}</label>
          <input
              value={value}
              name={name}
              className="border border-gray-500 rounded-lg p-2"
              placeholder={placeholder}
              onChange={(e)=>handleChange(e.target.value)}
          />

      </div>
  )
}

export default ContactInput