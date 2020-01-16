//Componente: bloco isolado de html, css, js o qual não interfere no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente filho
//Estado: informações mantidas pelo componente(lembrar: imutabilidade)

import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/Devitem";
import DevForm from "./components/Devform";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    //para adicionar os novos devs cadastrados
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
