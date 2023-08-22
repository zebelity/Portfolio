import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("moqoddkr");
  if (state.succeeded) {
      return <p className='message'>Thank You! I'll be in touch soon.</p>;
  }
  return (
    <>
    <div className='contact-section'>
      <h2 id="contact">Contact Me</h2>
      <div className='contact-form'>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
}

