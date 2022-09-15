import { ActionCardItemRenderProps, ActionCardListProps } from '@graphcommerce/next-ui'
import { BundleProductOptionsFragment } from './BundleProductOptions.gql'

export type BundleOptionProps = {
  idx: number
  renderer?: React.FC<ActionCardItemRenderProps<BundleOptionValueProps>>
} & NonNullable<NonNullable<BundleProductOptionsFragment['items']>[number]> &
  Pick<ActionCardListProps, 'size' | 'layout' | 'color' | 'variant'>

export type BundleOptionValueProps = NonNullable<
  NonNullable<BundleOptionProps['options']>[number]
> & {
  idx: number
  required: boolean
}
