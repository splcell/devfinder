import {render, screen} from '@testing-library/react'
import { UserInfo } from './UserInfo'

const userInfoData = {
  company: "company",
  blog: "blog",
  location: "location",
  twitter: "twitter",
};

describe('UserInfo component', () => {
  test('UserInfo render', () => {
    render(<UserInfo {...userInfoData}/>)
    expect(screen.getByTestId('user-info')).toBeInTheDocument()
  })

  test('InfoItem render', () => {
    render(<UserInfo {...userInfoData}/>)
    expect(screen.getByText('twitter')).toBeInTheDocument()
  })
})