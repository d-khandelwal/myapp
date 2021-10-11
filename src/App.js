import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import TableComponent from './components/table';
import Table2Component from './components/table/table2'

function App() {
  return (
    <div className="App">
      <Layout />
      <div className="main-body-container">
        <TableComponent />
        <Table2Component />
      </div>
    </div>
  );
}

export default App;
