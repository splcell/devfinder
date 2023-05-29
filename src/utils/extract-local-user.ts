import { GithubUser, LocalGithubUser } from "types";

export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
    id: user.id,
    blog: user.blog,
    login: user.login,
    avatar: user.avatar_url,
    name: user.name,
    bio: user.bio,
    company: user.company,
    created: user.created_at,
    followers: user.followers,
    following: user.following,
    location: user.location,
    repos: user.public_repos,
    twitter: user.twitter_username
})