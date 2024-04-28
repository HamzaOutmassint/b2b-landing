"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import axios from 'axios';

interface NewsLetterFormProps { }

const NewsLetterForm: React.FC<NewsLetterFormProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('')
  const [status, setStatus] = useState<number | null>()
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const subscribeUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRegex.test(email)) {
      try {
        const response = await axios.post('/api/subscribeUser', { email: email })

        if (response.status === 200) {
          setStatus(response.status)
          setMessage(response.data.message)
          setEmail('');
          setClearTimeoutMessage(4000);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setStatus(error.response?.status)
          setMessage(error.response?.data.message)
        }
        setEmail('');
        setClearTimeoutMessage(4000);
      }

    } else if (email === '') {
      setStatus(400)
      setMessage('Email is required')
      setClearTimeoutMessage(4000);

    } else {
      setStatus(400)
      setMessage('Invalid email. Please correct the email and try again')
      setClearTimeoutMessage(4000);

    }
  };

  const setClearTimeoutMessage = (timeout: number) => {
    const timer = setTimeout(() => {
      setMessage('');
    }, timeout);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    return setClearTimeoutMessage(0);
  }, []);


  return (
    <div className="flex flex-col md:items-center gap-4 pb-16 border-b border-gray-light">
      <h1 className="text-3xl font-bold text-center">
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
        {
          message !== '' && <span className={`${status === 200 ? 'bg-primary' : 'bg-errors text-white'} md:w-96 py-2 px-1 md:px-2 rounded-md text-sm`}>
            {message}
          </span>
        }
      </div>
    </div>
  )
}

export default NewsLetterForm
