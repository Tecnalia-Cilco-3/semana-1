import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
    beforeEach(() => {
      // Constructing a new JSDOM with this option is the key
      // to getting the code in the script tag to execute.
      // This is indeed dangerous and should only be done with trusted content.
      // https://github.com/jsdom/jsdom#executing-scripts
      dom = new JSDOM(html, { runScripts: 'dangerously' })
      container = dom.window.document.body
    })

    it('renders a nav element', () => {
        expect(container.querySelector('nav')).not.toBeNull()
      })

      it('renders a service element section', () => {
        expect(container.querySelector('#services')).not.toBeNull()
      })

      it('renders a news element section', () => {
        expect(container.querySelector('#news')).not.toBeNull()
      })

      it('renders a footer element', () => {
        expect(container.querySelector('footer')).not.toBeNull()
      })

})