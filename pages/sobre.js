import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About({autor}) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Next Filmes</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Sobre o sistema
          </h1>

            Sistema Feito para aprendizado para estudos do Next

            <hr/>

            Autor: {autor}
        
          <Link href='/busca'>Ir para Busca</Link>

        </main>
      </div>
    )
  }

export async function getStaticProps(context) {
    return {
      props: {
          autor: 'Gladson Finamore'
      }, // will be passed to the page component as props
    }
  }