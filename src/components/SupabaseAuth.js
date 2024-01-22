import './index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
const supabase = createClient('https://wolpzqnscafdkypvueit.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbHB6cW5zY2FmZGt5cHZ1ZWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2MjcwNDEsImV4cCI6MjAxOTIwMzA0MX0.mMpMYp0qfdOxtwbCm596OS8zLcfCp7Vd2uJ_C6xjv9I')
export default function App() {
  <Auth
  supabaseClient={supabase}
  appearance={{ theme: ThemeSupa }}/>
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<div>Logged in!</div>)
  }
}