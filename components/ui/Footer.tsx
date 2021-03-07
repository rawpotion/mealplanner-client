import React from 'react'

const Footer = () => (
  <div className="bg-green-300 py-16">
    <div className="px-4 md:px-40 grid auto-rows-max grid-cols-3 gap-8 md:gap-4 max-w-6xl mx-auto">
      <div className="row-start-1 col-span-3 md:col-span-1 md:row-span-3 text-center md:text-left">
        <h4>Contact</h4>
        <ul>
          <li>some</li>
          <li>text</li>
          <li>oh</li>
          <li>yes</li>
          <br />
          <li>yes</li>
          <br />
          <li>yes</li>
        </ul>
      </div>
      <div className="row-start-2 col-span-3 md:col-span-1 md:row-span-3 justify-self-center">
        <h4 className="text-center">Åbningstider</h4>
        <ul>
          <li className="flex justify-between">
            <span>Mandag-Torsdag</span>
            <span>Lukket</span>
          </li>
          <hr />
          <li className="flex justify-between">
            <span>Fredag</span>
            <span>17-21</span>
          </li>
          <hr />
          <li className="flex justify-between">
            <span>Lørdag-Søndag</span>
            <span>14-20</span>
          </li>
          <hr />
        </ul>
      </div>
      <div className="row-start-3 col-span-3 md:col-span-1 md:row-span-3 text-center md:text-right">
        <h4 className="">Find os</h4>
        <ul className="">
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer
