import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Explore the cosmos from home: {' '}
            <span className="underline text-blue">
            View our collection of space wonders{' '}
            </span>
            or {' '}
            <span className="underline text-blue">
            discover more about the universe
            </span>{' '}
            with us.
          </p>
          <p className="font-semibold text-gray text-xs">
            For inquiries, reach us at contact@symphonyofthestars.com
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">©️ 2024 Symphony of the Stars. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;