import { zodResolver } from '@hookform/resolvers/zod'
import { parseAsString, useQueryState } from 'nuqs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { PasswordInput } from '@/components/ui/password-input'
import { TextSeparator } from '@/components/ui/text-seperator'
import { paths } from '@/config/paths'

import { serialize } from '../utils/serilize'
import { Loader } from './loader'
import { RouterLinkMuted } from './router-link'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Please enter your password' }),
})

export function PasswordForm() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [email] = useQueryState('email', parseAsString)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email ?? '',
      password: '',
    },
  })

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      navigate(paths.dashboard.overview.getHref())
    }, 500)
  }

  return (
    <>
      <div className="w-full rounded-[--radius] border bg-background p-6 shadow-sm md:p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <p className="text-muted-foreground">{field.value}</p>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <FormLabel>Password</FormLabel>
                    <RouterLinkMuted to={paths.auth.resetPassword.getHref() + serialize({ email })}>
                      Forgot your password?
                    </RouterLinkMuted>
                  </div>
                  <FormControl>
                    <PasswordInput placeholder="Your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader />}
              Sign in
            </Button>
          </form>
        </Form>
        <TextSeparator text="or" />
        <div className="space-y-2.5">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
              navigate(paths.auth.verifyEmail.getHref() + serialize({ email }))
            }}
          >
            <span className="i-tabler-mail size-4" />
            Email sign-in code
          </Button>
        </div>
      </div>

      <RouterLinkMuted
        to={paths.auth.signIn.getHref() + serialize({ email })}
        className="mt-5 flex items-center justify-center gap-1.5"
      >
        <span className="i-tabler-chevron-left" />
        Go back
      </RouterLinkMuted>
    </>
  )
}
