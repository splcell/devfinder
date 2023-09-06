import {render, screen} from '@testing-library/react'
import { UserStat } from './UserStat';

const userStatData = {
  followers: 3,
  following: 3,
  repos: 7,
};

describe('UserStat component test', () => {
  test('UserStat render', () => {
    render(<UserStat {...userStatData}/>)
    expect(screen.getByTestId('user-stat')).toBeInTheDocument()
  })

  test('Repos render', () => {
    render(<UserStat {...userStatData}/>)
    expect(screen.getByText('Repos')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
  })

  test('Following render', () => {
    render(<UserStat {...userStatData}/>)
    expect(screen.getByText('Following')).toBeInTheDocument()
    screen.debug()
    expect(screen.getByTestId('user-following')).toBeInTheDocument()
  })

  test('Followers render', () => {
    render(<UserStat {...userStatData}/>)
    expect(screen.getByText('Followers')).toBeInTheDocument()
    screen.debug()
    expect(screen.getByTestId('user-followers')).toBeInTheDocument()
  })
})