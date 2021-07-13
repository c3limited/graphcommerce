import { ButtonLink, ButtonLinkList } from '@reachdigital/next-ui'
import React from 'react'
import { RowButtonLinkListFragment } from './RowButtonLinkList.gql'

export type RowButtonLinkListProps = RowButtonLinkListFragment

export default function RowButtonLinkList(props: RowButtonLinkListProps) {
  const { title, links } = props

  return (
    <ButtonLinkList
      title={title}
      links={links?.map((link) => (
        <ButtonLink key={link.title} {...link} url={`/${link.url}`} title={link.title ?? ''} />
      ))}
      containsBigLinks={links.some((link) => (link.title?.length ?? 0) > 30)}
    />
  )
}
