import { Link } from "react-router-dom"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"

type Props = {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: Props) {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
          <h1 className='text-3xl font-semibold'>eat for you</h1>
          <p className='text-muted-foreground text-sm'>{headerLabel}</p>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button variant='link' className='font-normal w-full' size='sm' asChild>
          <Link to={backButtonHref}>{backButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
