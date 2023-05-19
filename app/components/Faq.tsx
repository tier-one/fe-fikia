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
    question: 'What types of funds can I track?',
    answer: 'Invest personal funds in financial instruments based on their investment goals, risk tolerance, and time horizon, with the aim of long-term wealth growth. '
  },
  {
    question: 'Can I use the platform to invest ',
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
      <h1 className='text-3xl font-semibold'>More about Fikia</h1>
      <div className='xl:py-4'>
        {
          frequentlyAskedQuestions.map((faq: FaqType, index: number) => (
            <div key={index}>
              <Tab {...faq} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
