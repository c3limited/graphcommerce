import { useCartId } from '@reachdigital/magento-cart/CurrentCartId/useCartId'
import { useFormGqlMutation, useFormCompose } from '@reachdigital/react-hook-form'
import { useRouter } from 'next/router'
import { PaymentPlaceOrderProps } from '../Api/PaymentMethod'
import { PaymentMethodPlaceOrderNoopDocument } from './PaymentMethodPlaceOrderNoop.gql'

export default function PaymentMethodPlaceOrderNoop(props: PaymentPlaceOrderProps) {
  const { step, paymentDone, code } = props

  const form = useFormGqlMutation(PaymentMethodPlaceOrderNoopDocument, {
    mode: 'onChange',
    defaultValues: { cartId: useCartId() },
  })

  const { handleSubmit, register } = form
  const router = useRouter()

  const submit = handleSubmit(({ cartId }) => {
    paymentDone()
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push({ pathname: '/checkout/success', query: { cartId } })
  })

  useFormCompose({ form, step, submit, key: `PaymentMethodPlaceOrder_${code}` })

  return (
    <form onSubmit={submit}>
      <input type='hidden' {...register('cartId')} />
    </form>
  )
}
