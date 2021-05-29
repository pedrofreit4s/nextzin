import Head from 'next/head'
import React from 'react'
import Header from '../source/components/Header'
import Navbar from '../source/components/Navbar'
import TopBar from '../source/components/Topbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stores — Somos uma network focada em ajudar a comunidade!</title>
      </Head>
      <TopBar />
      <Header />
      <Navbar />
    </>
  )
}
