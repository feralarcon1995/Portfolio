import About from "@/components/About/About";
import Experiencie from "@/components/Experiencie/Experiencie";
import Hero from "@/components/Hero/Hero";
import { Layout } from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout title="Home" description="Home page">
      <Hero />
      <About />
      <Experiencie />
    </Layout>
  );
}
