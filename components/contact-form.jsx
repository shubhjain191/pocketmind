'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-[#FFD700] focus:ring-[#1E3A8A]"
          required
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border-2 border-[#FFD700] focus:ring-[#1E3A8A]"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full min-h-[150px] rounded-md border-2 border-[#FFD700] p-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition-all"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white font-semibold py-2 px-4 rounded-md transition-all hover:shadow-lg border-2 border-[#FFD700]"
      >
        Send Message
      </Button>
    </form>
  );
}