import Head from 'next/head'
import { WorkspaceProvider } from '../source/contexts/workspace'
import '../source/styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <WorkspaceProvider>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>Stores..</title>
      </Head>
      <Component {...pageProps} />
    </WorkspaceProvider>
  )
}
