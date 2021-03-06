import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'
import LoginForm from '../components/login-form'
import { CMS_NAME } from '../lib/constants'

const Login = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <LoginForm />
      </Layout>
    </>
  )
}

export default Login
