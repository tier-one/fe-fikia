'use client'
const TextArea = ({labelText,value,name,placeholder, handleChange}) => {
  return (
      <div className='w-full md:w-80 flex flex-col '>
          <label className="text-gray-500">{labelText}</label>
          <textarea
              value={value}
              name={name}
              className="border border-gray-500 rounded-lg p-2"
              rows={6}
              placeholder={placeholder}
              onChange={(e)=>handleChange(e.target.value)}
          />

      </div>
  )
}

export default TextArea