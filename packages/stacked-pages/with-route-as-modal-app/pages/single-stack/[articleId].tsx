import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import React from 'react'
import Grid, { data } from '../../components/Grid'
import StackDebug from '../../components/StackedDebugger'
import StackedDrawer from '../../components/StackedDrawer'
import { StackOptions } from '../_app'

function ArticlePage({ articleId }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <StackedDrawer>
      <StackDebug />
      <h1>Single Stack {articleId}</h1>
      <Grid />
    </StackedDrawer>
  )
}

const stackOptions: StackOptions = {
  stack: true,
  scope: ({ router }) => router.pathname,
}
ArticlePage.stackOptions = stackOptions

export default ArticlePage

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticProps({
  params: { articleId },
}: GetStaticPropsContext<{ articleId: string }>) {
  return { props: { articleId } }
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticPaths() {
  return {
    paths: data.map((articleId) => ({ params: { articleId: articleId.toString() } })),
    fallback: false,
  }
}
