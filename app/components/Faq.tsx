import Tab from "./Tab"

export type FaqType = {
  question: string,
  answer: string
}

const frequentlyAskedQuestions: FaqType[] = [
  {
    question: 'What is Fikia?',
    answer: 'Invest personal funds in financial instruments based on their investment goals, risk tolerance, and time horizon, with the aim of long-term wealth growth. '
  },
  {
    question: 'What types of funds can I track on the platform?',
    answer: 'Invest personal funds in financial instruments based on their investment goals, risk tolerance, and time horizon, with the aim of long-term wealth growth. '
  },
  {
    question: 'Can I use the platform to invest directly in funds, or do I need to go through a broker? ',
    answer: 'Invest personal funds in financial instruments based on their investment goals, risk tolerance, and time horizon, with the aim of long-term wealth growth. '
  },
  {
    question: 'Is it free to use this platform?',
    answer: 'Invest personal funds in financial instruments based on their investment goals, risk tolerance, and time horizon, with the aim of long-term wealth growth. '
  },
]


export default function Faq() {
  return (
    <div>
      <h1 className='text-3xl text-[#475569] font-semibold'>More about Fikia</h1>
      <div className='xl:py-4'>
        {
          frequentlyAskedQuestions.map((faq: FaqType, index: number) => (
            <div key={index} className='text-[#64748A]'>
              <Tab {...faq} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
