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

import { Loader } from './loader'
import { RouterLink } from './router-link'

const formSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Please provide a valid email' }),
})

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
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
    <div className="w-full rounded border p-4 shadow-sm md:p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex gap-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
        Already have an account?
        {' '}
        <RouterLink to="/auth/sign-in">Sign in</RouterLink>
      </p>
    </div>
  )
}
