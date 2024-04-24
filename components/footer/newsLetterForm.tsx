"use client";

import { ChangeEvent, FormEvent, useState } from 'react';

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import axios from 'axios';

interface NewsLetterFormProps { }

const NewsLetterForm: React.FC<NewsLetterFormProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('')
  const [status, setStatus] = useState<number | null>()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const subscribeUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/subscribeUser', { email: email })

      // console.log(response.data.message)
      if (response.status == 200) {
        setStatus(response.status)
        setMessage(response.data.message)
        setEmail('');

        setTimeout(() => {
          setMessage('');
        }, 500);

      } else {
        setStatus(response.status)
        setMessage(response.data.message)
        setEmail('');

        setTimeout(() => {
          setMessage('');
        }, 500);

      }
    } catch (error) {
      // Handle error
      alert('An error occurred. Please try again later.');
    }
  };


  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-16 border-b border-gray-light">
      <h1 className="text-3xl font-bold">
        Stay in Touch
      </h1>
      <span className="text-base text-gray-bold text-center">
        Sign up for our global brief on all things sustainable.
      </span>
      <div className='flex flex-col gap-2'>
        <form className="flex gap-4" onSubmit={subscribeUser}>
          <Input
            type="email"
            className="border border-gray-light md:w-96 bg-[#F8F8F8] focus-visible:ring-offset-0"
            placeholder="Email Address"
            name="email"
            required
            autoCapitalize="off"
            autoCorrect="off"
            onChange={handleEmailChange}
            value={email}
          />
          <Button
            className="bg-white hover:bg-primary text-primary hover:text-white border border-primary"
            type="submit"
            name="subscribe"
          >
            Subscribe
          </Button>
        </form>
        <span className={`${status == 200 ? 'bg-primary' : 'bg-red'} md:w-96 py-2 px-1 md:px-2 rounded-md text-sm`}>
          {message}
        </span>
      </div>
    </div>
  )
}

export default NewsLetterForm
