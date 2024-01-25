import { ReactElement, ReactNode } from 'react'


// old way 
// export const Section: React.FC<{title: string}> = ({children, title}) => {
//   return (
//     <section>
//         <h2>{title}</h2>
//         <p>{children}</p>
//     </section>
//   )
// }

type SectionProps = {
    title?: string
    children: ReactNode
}

export const Section = ({children, title = "My SubHeading"}: SectionProps): ReactElement => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}

export default Section

