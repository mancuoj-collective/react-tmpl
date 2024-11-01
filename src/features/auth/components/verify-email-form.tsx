import { zodResolver } from '@hookform/resolvers/zod'
import { parseAsString, useQueryState } from 'nuqs'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { paths } from '@/config/paths'

const formSchema = z.object({
  code: z.string().min(6),
})

export function VerifyEmailForm() {
  const navigate = useNavigate()
  const [email] = useQueryState('email', parseAsString)
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
    },
  })

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setTimeout(() => {
      navigate(paths.dashboard.overview)
    }, 1000)
  }

  return (
    <>
      <div className="w-full rounded-[--radius] border bg-background p-8 shadow-sm md:p-10">
        <Form {...form}>
          <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <h1>Enter the code sent to <span className="font-semibold">{email}</span></h1>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} autoFocus {...field} onComplete={onSubmit}>
                      <InputOTPGroup className="flex w-full justify-between font-semibold">
                        <InputOTPSlot className="size-10 md:h-12 md:w-14" index={0} />
                        <InputOTPSlot className="size-10 md:h-12 md:w-14" index={1} />
                        <InputOTPSlot className="size-10 md:h-12 md:w-14" index={2} />
                        <InputOTPSlot className="size-10 md:h-12 md:w-14" index={3} />
                        <InputOTPSlot className="size-10 md:h-12 md:w-14" index={4} />
                        <InputOTPSlot className="size-10 md:h-12 md:w-14" index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <p className="mt-5 text-center text-sm text-muted-foreground">
        Can't find the email? Check your spam folder.
      </p>
    </>
  )
}
