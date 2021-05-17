import { ProductListParams } from '@reachdigital/magento-product/ProductListItems/filterTypes'
import { PageMeta } from '@reachdigital/magento-store'
import { PageMetaProps } from '@reachdigital/next-ui/PageMeta'
import React from 'react'
import { CategoryMetaFragment } from './CategoryMeta.gql'

type CategoryMetaProps = CategoryMetaFragment &
  Omit<PageMetaProps, 'title' | 'metaDescription'> & {
    params?: ProductListParams
  }

export default function CategoryMeta(props: CategoryMetaProps) {
  const { name, meta_title, meta_description, params, ...pageMetaProps } = props
  const anyFilterActive = Object.keys(params?.filters ?? {}).length > 0

  return (
    <PageMeta
      title={meta_title ?? name ?? ''}
      metaDescription={meta_description ?? undefined}
      metaRobots={anyFilterActive ? ['noindex'] : undefined}
      canonical={`${params?.url}${
        (params?.currentPage ?? 1) > 1 ? `/q/page/${params?.currentPage}` : ''
      }`}
      {...pageMetaProps}
    />
  )
}
