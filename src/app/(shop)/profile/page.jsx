export const revalidate = 0

import { auth } from "@/auth.config"
import { Title } from "@/components"
import { redirect } from "next/navigation"
import { LogoutButton } from "./ui/LogoutButton"
import { ProfileTable } from "./ui/ProfileTable"
import { getCustomer, getOrders } from "@/actions"
import { OrdersTable } from "./ui/OrdersTable"

export default async function() {
  const session = await auth()

  if(!session?.user) {
    redirect('/')
  }

  const customer = await getCustomer(session.user.id)
  const orders = await getOrders(session.user.id)

  return (
    <div className="px-10 mt-14 h-screen">
      <Title title="Mi cuenta" className="px-8 sm:px-0" />

      <ProfileTable user={customer} />
      <OrdersTable orders={orders} />

      <LogoutButton />
    </div>
  )
}
