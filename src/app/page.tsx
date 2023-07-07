import ConsContainer from "@/components/ConsContainer";
import Dashboard from "@/components/Dashboard/Dashboard";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <ConsContainer>
      {/* header */}
      <Header />
      {/* main Dashboard */}
      <Dashboard />
    </ConsContainer>
  );
}
