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
import { Input } from '@/components/ui/input'
import { paths } from '@/config/paths'

import { serialize } from '../utils/serilize'
import { Loader } from './loader'
import { RouterLinkMuted } from './router-link'

const formSchema = z.object({
  email: z.string().email(),
})

export function ResetPasswordForm() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [email] = useQueryState('email', parseAsString)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email ?? '',
    },
  })

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      navigate(paths.dashboard.overview)
    }, 500)
  }

  return (
    <>
      <div className="w-full rounded-[--radius] border bg-background p-4 shadow-sm md:p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader />}
              Send reset instructions
            </Button>
          </form>
        </Form>
      </div>

      <RouterLinkMuted
        to={paths.auth.signIn + serialize({ email })}
        className="mt-5 flex items-center justify-center gap-1.5"
      >
        <span className="i-tabler-chevron-left" />
        Back to sign-in
      </RouterLinkMuted>
    </>
  )
}
