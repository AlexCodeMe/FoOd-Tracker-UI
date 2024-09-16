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
import { LoginSchema } from "@/lib/schemas"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useAuth } from "@/context/AuthContext"

export default function LoginForm() {
  const navigate = useNavigate()
  const { login } = useAuth()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string>("")

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  async function onSubmit({ username, password }: z.infer<typeof LoginSchema>) {
    console.log("username:", username)
    console.log("password", password)
    try {
      const response = await axios.post(
        "http://localhost:9193/api/v1/auth/login",
        { username, password }
      )

      if (response.data && response.data.data && response.data.data.token) {
        login(response.data.data.token)
        navigate("/dashboard")
      } else {
        setError("Login failed. No token received.")
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("Login failed. Please check your credentials.")
    }
  }

  return (
    <CardWrapper
      headerLabel='Welcome back'
      backButtonLabel="Don't have an account?"
      backButtonHref='/register'
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
                      placeholder='john.doe@example.com'
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
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
