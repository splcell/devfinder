import {ReactComponent as BlogIcon} from 'assets/icon-website.svg'
import {ReactComponent as CompanyIcon} from 'assets/icon-company.svg'
import {ReactComponent as LocationIcon} from 'assets/icon-location.svg'
import {ReactComponent as TwitterIcon} from 'assets/icon-twitter.svg'
import { LocalGithubUser } from 'types';
import styles from './UserInfo.module.scss';
import { InfoItem, InfoItemProps } from 'components/InfoItem';

interface UserInfoProps extends Pick <LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'>{}

export const UserInfo = ({blog, company, location, twitter}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },

    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true
    },

    {
      icon: <CompanyIcon />,
      text: company
    },

    {
      icon: <TwitterIcon />,
      text: twitter
    }
  ]

  return(
  <div className={styles.userInfo} data-testid='user-info'>
    {items.map((item, index) => (
      <InfoItem {...item} key={index} />
    ))}
  </div>
);
}