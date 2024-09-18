import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <main className="min-h-screen bg-white rounded-3xl">
      <Header />
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>    
    </main>
  );
}
