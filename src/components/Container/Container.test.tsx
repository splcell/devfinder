import {render, screen} from '@testing-library/react'
import { Container } from './Container'

describe('Container component test', () => {
  test('Render container', () => {
    render(<Container>Content</Container>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})