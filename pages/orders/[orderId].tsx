import { useRouter } from 'next/router'
import { StoreLayout } from '@components/ui'
import { Main } from '@components/ui/Layout'

const Order = () => {
  const router = useRouter()
  const { orderId } = router.query

  return (
    <Main>
      <div className="grid grid-cols-12">
        <div>{orderId}</div>
      </div>
    </Main>
  )
}

Order.Layout = StoreLayout

export default Order
