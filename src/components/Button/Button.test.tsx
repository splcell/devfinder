import {render, screen} from '@testing-library/react';
import { Button } from './Button';

const children = 'Click'

describe('Button Component test', () => {
  test('Render button', () => {
    render(<Button>Click</Button>)
    expect(screen.getByText('Click')).toBeInTheDocument()
  })

  test('Button snapshot', () => {
    const view = render(<Button>{children}</Button>)
    expect(view).toMatchSnapshot()
  })
})