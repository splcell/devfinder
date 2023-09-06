import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { extractLocalUser } from "utils/extract-local-user";
import { isGithubUser } from "utils/typeguards";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  async function fetchUser(text: string) {
    const url = BASE_URL + text;
    const response = await fetch(url);
    const data = (await response.json()) as GithubUser | GithubError;

    if (isGithubUser(data)) {
      setUser(extractLocalUser(data));
    } else {
      setUser(null);
    }
  }

  return (
    <Container data-testid="container">
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
