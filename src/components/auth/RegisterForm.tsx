import { Button } from "../ui/button"
import CardWrapper from "../CardWrapper"
import {
  Form,
  FormItem,
  FormControl,
  FormField,
  FormMessage,
  FormLabel,
} from "../ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { RegisterSchema } from "@/lib/schemas"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function RegisterForm() {
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string>("")

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  async function onSubmit({
    username,
    password,
  }: z.infer<typeof RegisterSchema>) {
    try {
      const response = await fetch(
        "http://localhost:9193/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      )

      if (response.ok) {
        navigate("/dashboard")
      } else {
        const data = await response.json()
        setError(data.message)
      }
    } catch (err) {
      console.error("Register error:", err)
      setError("Failed to register. Please try again later.")
    }
  }

  return (
    <CardWrapper
      headerLabel='Welcome'
      backButtonLabel='Already have an account?'
      backButtonHref='/'
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='toocoolforschool'
                      type='username'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='******' type='password' />
                  </FormControl>
                  <Button
                    size='sm'
                    variant='link'
                    asChild
                    className='px-0 font-normal'
                  >
                    <Link to='/auth/reset'>Forgot password? (TODO)</Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <FormError message={error || urlError} />
                    <FormSuccess message={success} /> */}
          <Button type='submit' className='w-full'>
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
