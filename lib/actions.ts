'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>

export async function sendEmail(data: ContactFormInputs) {
  const { name, email, message } = data
  const emailUri = 'https://api.boomscript.com/api/send-email-gmail/basic'
  const from = 'peter@boomscript.com'
  const to = 'tyanne.codes@gmail.com'
  const formattedFormData = {
    name: `${name}`,
    email: email,
    message: message
  }
  const emailData = {
    from,
    to,
    subject: 'Contact Form Submission',
    client: formattedFormData
  }

  console.log('formDetails', emailData)
  let response = await fetch(emailUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(emailData)
  })

  if (!response.ok) {
    throw new Error('Failed to send email')
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // TODO: Send a welcome email

    return { success: true }
  } catch (error) {
    return { error }
  }
}
