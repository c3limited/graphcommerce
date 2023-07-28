import { useFormState } from '@graphcommerce/ecommerce-ui'
import { ApolloCartErrorSnackbar } from '@graphcommerce/magento-cart'
import {
  Button,
  ErrorSnackbar,
  ErrorSnackbarProps,
  filterNonNullableKeys,
  iconChevronRight,
  IconSvg,
  MessageSnackbar,
  MessageSnackbarProps,
} from '@graphcommerce/next-ui'
import { Trans } from '@lingui/react'
import { toUserErrors } from './toUserErrors'
import { useFormAddProductsToCart } from './useFormAddProductsToCart'

export type AddProductsToCartSnackbarProps = {
  errorSnackbar?: Omit<ErrorSnackbarProps, 'open'>
  successSnackbar?: Omit<MessageSnackbarProps, 'open' | 'action'>
  disableSnackbar?: boolean
}

export function AddProductsToCartSnackbar(props: AddProductsToCartSnackbarProps) {
  const { errorSnackbar, successSnackbar, disableSnackbar } = props
  const { error, data, redirect, control, submittedVariables } = useFormAddProductsToCart()
  const formState = useFormState({ control })

  const userErrors = toUserErrors(data)

  const showSuccess =
    !formState.isSubmitting &&
    formState.isSubmitSuccessful &&
    !error?.message &&
    !userErrors.length &&
    !redirect

  const items = filterNonNullableKeys(data?.addProductsToCart?.cart.items)

  const productSkus: (string | undefined | null)[] = []

  submittedVariables?.cartItems.forEach((item) => {
    productSkus.push(item.sku)
  })

  const productsAdded = items
    .filter((item) => productSkus.includes(item.product.sku))
    .map((product) => product.product.name)

  const showErrorSnackbar = userErrors.length > 0

  if (disableSnackbar) return null

  return (
    <>
      {error && <ApolloCartErrorSnackbar error={error} />}

      {showErrorSnackbar && (
        <ErrorSnackbar variant='pill' severity='error' {...errorSnackbar} open={showErrorSnackbar}>
          <>{data?.addProductsToCart?.user_errors?.map((e) => e?.message).join(', ')}</>
        </ErrorSnackbar>
      )}

      {showSuccess && (
        <MessageSnackbar
          variant='pill'
          {...successSnackbar}
          open={showSuccess}
          action={
            <Button
              href='/cart'
              id='view-shopping-cart-button'
              size='medium'
              variant='pill'
              color='secondary'
              endIcon={<IconSvg src={iconChevronRight} />}
              sx={{ display: 'flex' }}
            >
              <Trans id='View shopping cart' />
            </Button>
          }
        >
          <Trans
            id='<0>{name}</0> has been added to your shopping cart!'
            components={{ 0: <strong /> }}
            values={{ name: productsAdded.join(', ') }}
          />
        </MessageSnackbar>
      )}
    </>
  )
}
