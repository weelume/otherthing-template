'use client'

import { useState, type FormEvent } from 'react'
import { contactCopy as copy } from '../content/contact'
import { ContactDoodles } from '../components/PaperArt'
import files from '../content/referenceFiles.json'
import { Shell } from '../components/Shell'
import type { PageProps } from '../types'

export default function ContactPage(props: PageProps) {
  const { locale } = props
  const [status, setStatus] = useState<'idle' | 'invalid' | 'success'>('idle')
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const complete = ['name', 'email', 'details'].every(key => String(data.get(key) ?? '').trim().length > 0)
    const valid = form.checkValidity() && complete
    setStatus(valid ? 'success' : 'invalid')
    console.debug('[Otherthing] 本地表单校验', { valid, sent: false, saved: false })
    if (!valid) form.reportValidity()
  }
  return <Shell {...props} contact><section className="ot-contact ot-section">
    <h1>{copy.heading[locale]}</h1>
    <p className="ot-worldwide">{copy.worldwide[locale]}</p><p className="ot-available">{copy.available[locale]}</p>
    <div className="ot-contact-stage"><ContactDoodles /><div className="ot-form-card ot-glass">
      <img className="ot-contact-avatar" src={files['Sy6kjiXdnTo86fejttUzx4kyY.jpg']} alt="" /><h2>{copy.title[locale]}</h2><p>{copy.description[locale]}</p>
      <form onSubmit={submit} onChange={() => setStatus('idle')}>
        <label htmlFor="ot-name">{copy.name[locale]}</label><input id="ot-name" name="name" autoComplete="name" required maxLength={120} placeholder={copy.namePlaceholder[locale]} />
        <label htmlFor="ot-email">{copy.email[locale]}</label><input id="ot-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder={copy.emailPlaceholder[locale]} />
        <label htmlFor="ot-details">{copy.details[locale]}</label><textarea id="ot-details" name="details" required maxLength={5000} rows={5} placeholder={copy.detailsPlaceholder[locale]} />
        <button className="ot-blue-button" type="submit">{copy.submit[locale]}</button>
      </form>
      <p className="ot-demo">{copy.demo[locale]}</p><p className="ot-form-status" role="status">{status === 'idle' ? '' : copy[status][locale]}</p>
    </div></div>
  </section></Shell>
}
