import Tab from "./Tab"

export type FaqType = {
  question: string,
  answer: string
}

const frequentlyAskedQuestions: FaqType[] = [
  {
    question: 'What is Fikia?',
    answer: 'Fikia is a powerful platform designed specifically for retail investors to easily build and track their investment portfolios. It empowers individuals to take control of their financial future and make informed investment decisions.'
  },
  {
    question: 'How does Fikia work? ',
    answer: 'Fikia provides a user-friendly interface that allows you to seamlessly create and manage your investment portfolio. You can choose from a wide range of investment options, including Exchange Traded Funds (ETFs), mutual funds, and more. Fikia provides personalized recommendations based on your investment goals, risk tolerance, and preferences to help you make well-informed decisions.'
  },
  {
    question: 'Is Fikia suitable for beginners?',
    answer: 'Absolutely! Fikia is designed to cater to investors of all experience levels, including beginners. We provide educational resources, tutorials, and a user-friendly interface to ensure that even those new to investing can easily navigate the platform and make informed decisions.'
  },
  {
    question: 'What is Fikia Plus?',
    answer: 'Fikia Plus is a comprehensive platform specifically designed for fund managers to automate and streamline their fund management processes. It offers advanced tools and features to enhance efficiency, improve decision-making, and optimize portfolio performance.'
  },
  {
    question: 'Is the platform free to use?',
    answer: 'We have both free and premium subscription options. Our premium plans provide additional features and benefits, such as advanced portfolio analytics and personalized support.'
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
