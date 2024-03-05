import { auth } from "@/auth.config"
import { Title } from "@/components"
import { redirect } from "next/navigation"
import { LogoutButton } from "./ui/LogoutButton"

export default async function() {
  const session = await auth()

  if(!session?.user) {
    redirect('/')
  }

  return (
    <div>
      <Title title="Perfil" />
      <pre>
        {
          JSON.stringify(session.user, null, 2)
        } 
      </pre>

      <LogoutButton />
    </div>
  )
}
