import Head from 'next/head'
import Header from '../../source/components/Control/Header'
import Information from '../../source/components/Control/Information'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Stores — Control panel management!</title>
      </Head>
      <Header />
      <Information />
    </>
  )
}
