import './App.css';

import PageHeader from './components/pageHeader/PageHeader';
import PageBody from './components/pageBody/PageBody';
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
