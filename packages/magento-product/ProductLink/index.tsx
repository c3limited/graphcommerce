import { useQuery } from '@apollo/client'
import { StoreConfigDocument } from '@reachdigital/magento-store'
import { ProductLinkFragment } from './ProductLink.gql'

type ProductLinkProps = Omit<ProductLinkFragment, 'uid'>

export function productLink(link: ProductLinkProps, base?: string) {
  const { __typename, url_key } = link
  const productRoute = __typename
    .split(/(?=[A-Z])/)
    .map((s) => s.toLowerCase())
    .reverse()

  // For Simple and Virtual products we're not navigating to a type specific page
  if (__typename === 'SimpleProduct') productRoute.splice(1, 1)

  return `${base ?? '/'}${productRoute.join('/')}/${url_key}`
}

export function useProductLink(props: ProductLinkProps & { canonical?: boolean }) {
  const { data: storeConfigData } = useQuery(StoreConfigDocument)
  const { canonical = false } = props
  const base = canonical ? storeConfigData?.storeConfig?.base_link_url ?? undefined : undefined
  return productLink(props, base)
}
