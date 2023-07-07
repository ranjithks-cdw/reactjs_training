import './App.css';

import PageHeader from './components/PageHeader/PageHeader';
import PageBody from './components/PageBody/PageBody';
/**
 * Main App Component
 * @returns Application
 * @author @ranjithks-cdw
 */
function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageBody />
    </div>
  );
}

export default App;
