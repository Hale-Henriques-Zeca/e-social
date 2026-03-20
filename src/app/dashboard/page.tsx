export default function DashboardPage() {
  return (
    <section className="min-h-screen px-8 py-24 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-teal-400">
        Transparência On-Chain
      </h1>

      <p className="text-gray-300 max-w-3xl mb-8">
        Aqui qualquer pessoa pode acompanhar as doações da E-Social
        diretamente na blockchain, sem intermediários.
      </p>

      <a
        href="https://testnet.bscscan.com/address/0x55F98433E47cCe501AB85a471E45ecB5624d5d31"
        target="_blank"
        className="text-red-500 underline"
      >
        Ver contrato no BscScan
      </a>
    </section>
  );
}
