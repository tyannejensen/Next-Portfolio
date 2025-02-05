import React from 'react'

interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  message
}) => (
  <div>
    <h1>Contact Form Submission</h1>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
)

export default ContactFormEmail
