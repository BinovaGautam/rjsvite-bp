import { AutoRouter } from 'react-auto-page-router';

const importPages = import.meta.glob('/src/app/**/*.{js,jsx,ts,tsx}');

const App = () => {
  return (
    <>
      <AutoRouter importedPages={importPages} />
    </>
  );
}

export default App;
