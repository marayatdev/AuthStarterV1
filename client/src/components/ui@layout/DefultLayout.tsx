import { Box, Container } from "@mantine/core";
import { Header } from "./Header/Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Box>
      <Header />
      <Container size={"80%"} bg={"red"}>
        {children}
      </Container>
    </Box>
  );
}
