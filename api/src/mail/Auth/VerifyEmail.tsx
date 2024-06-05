import { Html, Section, Container, Text } from "@react-email/components"

export default function VerifyEmail({ token }: { token: string }) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hi there! Chap!</Text>
          <Text style={paragraph}>Welcome to -APP.NAME-!</Text>
          <Text style={paragraph}>Your Verification token: {token}</Text>
        </Container>
      </Section>
    </Html>
  )
}

// Styles for the email template
const main = {
  backgroundColor: '#ffffff',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
}

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
}

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
}
