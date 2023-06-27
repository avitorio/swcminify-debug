import { GetServerSideProps } from 'next'
import { useFormContext } from 'react-hook-form'

export const Outstatic = () => {
  const form = useFormContext()
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export const OstSSP: GetServerSideProps = async ({ req }) => {
  return {
    props: {}
  }
}
