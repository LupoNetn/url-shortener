import React from 'react'
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'

const footerLinks = [
  {
    title: "Features",
    links: [
      { name: "Link Shortening", href: "/" },
      { name: "Branded Links", href: "/" },
      { name: "Analytics", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/" },
      { name: "Developers", href: "/" },
      { name: "Support", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/" },
      { name: "Our Team", href: "/" },
      { name: "Careers", href: "/" },
      { name: "Contact", href: "/" },
    ],
  },
];

const socialIcons = [
  { icon: <FaFacebookSquare />, href: "/" },
  { icon: <FaTwitter />, href: "/" },
  { icon: <FaPinterest />, href: "/" },
  { icon: <FaInstagram />, href: "/" },
];

const Footer = () => {
  return (
    <footer className="bg-[var(--neutral-dark-violet)] py-16">
      <div className="allignment flex max-sm:flex-col max-sm:items-center max-sm:text-center justify-between">
        <div>
          <img src="/images/logo.svg" alt="Shortly" className="filter invert" />
        </div>
        
        {footerLinks.map((section) => (
          <div key={section.title} className="text-white mt-8 md:mt-0">
            <h3 className="font-bold mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-gray hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="flex space-x-6 items-center">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-white hover:text-primary-cyan text-2xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer