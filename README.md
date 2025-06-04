# EventPlace – Event Center Website Template (React + Vite + TailwindCSS)

A modern and responsive event center landing page built with **React**, **Vite**, and **TailwindCSS**. Perfect for event venues, booking agencies, and event organizers.

## 🚀 Live Demo

[https://event-place.vercel.app](https://event-place.vercel.app)

## 📁 What's Inside

- React components (`/src`)
- TailwindCSS setup
- Vite configuration
- Public assets (`/public`)
- Fully functional and styled booking/contact form
- Ready for deployment (tested on Vercel)

## 📩 Booking Form Setup with FormSubmit

This template uses [FormSubmit](https://formsubmit.co) to handle form submissions without a backend.

### ✏️ How to Configure

1. Open the component that contains the booking/contact form (e.g., `src/components/Contact.jsx`)
2. Locate the `<form>` tag and update it like this:

```jsx
<form
  action="https://formsubmit.co/YOUR_EMAIL_HERE"
  method="POST"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Booking Message" required />
  
  {/* Optional hidden inputs */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://event-place.vercel.app/thank-you" />

  <button type="submit">Send</button>
</form>


📄 License
This template is licensed for personal and commercial use.
You are free to:

Use it for client work or personal projects

Customize it

Sell it as part of a larger solution

You may not:
Resell this template as-is without significant modification
