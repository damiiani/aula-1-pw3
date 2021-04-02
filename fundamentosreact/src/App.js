import HelloWorld from './components/basic/HelloWorld';
import Props from './components/basic/Props';
import Card from './components/layouts/Card';
import Family from './components/basic/Family';
import FamilyClone from './components/basic/FamilyClone';
import FamilyMember from './components/basic/FamilyMember';
import State from './components/basic/State';
import IndirectCommunication from './components/basic/IndirectCommunication/Parent';

function App() {
  return (
    <div className="app">
      <h1>Exemplos React</h1>
      <div className="cards">
        <Card title="Olá Mundo" color="#226ce0">
          <HelloWorld />
        </Card>

        <Card title="Propriedades" color="#a307e6">
          <Props name="Homer" surname="Jay Simpson" age={38} />
        </Card>

        <Card title="Componentes aninhados" color="#fe4e05">
          <Family surname="Simpson" />
        </Card>

        <Card title="Componentes aninhados (clone)" color="#2e7837">
          <FamilyClone surname="Simpson">
            <FamilyMember name="Homer Jay" />
            <FamilyMember name="Marjorie" />
            <FamilyMember name="Bartholomew JoJo" />
            <FamilyMember name="Lisa Marie" />
            <FamilyMember name="Margareth" />
          </FamilyClone>
        </Card>

        <Card title="Estado" color="#fadb52">
          <State />
        </Card>

        <Card title="Comunicação indireta" color="#f50963">
          <IndirectCommunication />
        </Card>
      </div>
    </div>
  );
}

export default App;
