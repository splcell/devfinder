import {render, screen} from '@testing-library/react'
import { InfoItem } from './InfoItem'

describe('Infoitem component', () => {
  test('Infoitem component render', () => {
    render(<InfoItem />)
    expect(screen.getByTestId('info-item')).toBeInTheDocument()
  })

  test('Render without text', () => {
    render(<InfoItem />)
    expect(screen.getByText('Not Available')).toBeInTheDocument()
  })

  test('Render with text', () => {
    render(<InfoItem text='Text'/>)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })

  test('Render without link', () => {
    render(<InfoItem text='Text'/>)
    expect(screen.queryByTestId('info-link')).toBeNull()
  })

  test('Render with link', () => {
    render(<InfoItem text='http://google.com' isLink={true}/>)
    expect(screen.getByTestId('info-link')).toBeInTheDocument()
  })
})