import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
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
import { TextSeparator } from '@/components/ui/text-seperator'
import { paths } from '@/config/paths'

import { Loader } from './loader'
import { RouterLink } from './router-link'

const formSchema = z.object({
  email: z.string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Please provide a valid email' }),
})

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <>
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
            Continue
          </Button>
          <TextSeparator text="or" />
          <div className="space-y-2.5">
            <Button type="submit" variant="outline" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader /> : <span className="i-devicon-google size-4" />}
              Continue with Google
            </Button>
            <Button type="submit" variant="outline" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader /> : <span className="i-devicon-github size-4 dark:invert" />}
              Continue with GitHub
            </Button>
          </div>
        </form>
      </Form>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don't have an account?
        {' '}
        <RouterLink to={paths.auth.signUp}>Sign up</RouterLink>
      </p>
    </>
  )
}
