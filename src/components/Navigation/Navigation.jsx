import { Link, Container } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Container>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </Container>
    </>
  );
};

