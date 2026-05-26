
export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial',
      padding: 40,
      background: '#0f172a',
      minHeight: '100vh',
      color: 'white'
    }}>
      <h1>Vector Gestão</h1>

      <p>Sistema ERP para loja de personalizados.</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        marginTop: 30
      }}>
        <div style={{
          background: '#1e293b',
          padding: 20,
          borderRadius: 12
        }}>
          <h2>Faturamento</h2>
          <p>R$ 12.450</p>
        </div>

        <div style={{
          background: '#1e293b',
          padding: 20,
          borderRadius: 12
        }}>
          <h2>Lucro</h2>
          <p>R$ 4.830</p>
        </div>

        <div style={{
          background: '#1e293b',
          padding: 20,
          borderRadius: 12
        }}>
          <h2>Pedidos</h2>
          <p>18 pendentes</p>
        </div>
      </div>
    </div>
  );
}
