import Header from "./components/Header";
import SalesCard from "./components/SalesCard";


function App() {
  return (
    //O Fragment (<> </>) serve para permitir que o componente react exporte mais de uma tag
    <>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
