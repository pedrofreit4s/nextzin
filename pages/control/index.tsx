import Head from 'next/head'
import SimpleHeader from '../../source/components/Control/Header/simple'
import Profile from '../../source/components/Control/Profile'

export default function Control() {
  return (
    <>
      <Head>
        <title>Stores — Welcome to the control panel!</title>
      </Head>
      <SimpleHeader />
      <Profile />
    </>
  )
}
