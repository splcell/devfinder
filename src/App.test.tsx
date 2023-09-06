import {screen, render} from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('App Render', () => {
    render(<App />)
    expect(screen.getByTestId('container')).toBeInTheDocument()
  })
})