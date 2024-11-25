import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Switch } from '@headlessui/react'
import { CiLocationArrow1 } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function ContactUs() {
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl bg-white rounded-lg shadow-lg p-6 md:p-12 flex flex-col md:flex-row gap-8">
                {/* Left Section - Get in touch */}
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-semibold text-gray-900">Get in touch</h2>
                    <p className="text-gray-600">
                    We'd love to hear from you. Please fill out the form, and our team will get back to you shortly.
                    </p>
                    <div className="space-y-2">
                        <p className="flex items-center space-x-2 text-gray-600">
                            <span> 
                              <CiLocationArrow1 /> 
                            </span>
                            <span>1757 Bank Street</span>
                        </p>
                        <p className="flex items-center space-x-2 text-gray-600">
                            <span>
                              <FaPhone />
                            </span>
                            <span>+1 (613) 413-5757 </span>
                        </p>
                        <p className="flex items-center space-x-2 text-gray-600">
                            <span>
                              <MdOutlineAlternateEmail/>
                            </span>
                            <span>almazloum.osama@gmail.com</span>
                        </p>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <form action="#" method="POST" className="md:w-1/2 space-y-6">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">First name</label>
                            <input type="text" id="first-name" name="first-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">Last name</label>
                            <input type="text" id="last-name" name="last-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">Phone number</label>
                        <input type="tel" id="phone-number" name="phone-number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Message</label>
                        <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
                    </div>
                    <Field className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={`${
                                    agreed ? 'bg-indigo-600' : 'bg-gray-200'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    className={`${
                                        agreed ? 'translate-x-6' : 'translate-x-1'
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </Switch>
                        </div>
                        <label className="ml-4 text-sm text-gray-600">
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                privacy&nbsp;policy
                            </a>
                            .
                        </label>
                    </Field>
                    <button type="submit" className="w-full rounded-md bg-indigo-600 py-2 text-white font-semibold shadow-md hover:bg-indigo-700">Send message</button>
                </form>
            </div>
        </div>
    );
}
