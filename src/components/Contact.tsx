import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Update EmailJS initialization
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    if (!serviceId || !templateId) {
      console.error('Missing configuration:', { serviceId, templateId });
      toast({
        title: "Configuration Error",
        description: "EmailJS is not properly configured. Please check your environment variables.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      to_name: 'Rahul',
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_subject: subject,
      message: message,
    };

    emailjs.send(
      serviceId,
      templateId,
      templateParams
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
      setSubject('');
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default", 
        className: "bg-green-500 text-white",
      });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      toast({
        title: "Failed to send message",
        description: "Please ensure all template variables match your EmailJS template configuration.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8">
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Your Phone
                </label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="Subject of your message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Enter your message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button disabled={isSubmitting} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 dark:bg-gray-700 shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-500" size={24} />
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">rahul658541@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-green-500" size={24} />
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+91 9997813970</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-red-500" size={24} />
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Mathura, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
