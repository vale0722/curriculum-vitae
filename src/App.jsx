import './presentation/assets/styles/app.scss';
import { ScrollToTop } from './domain/helpers/scroll';
import { RenderRoutes, ROUTES } from './domain/helpers/routes';
import Layout from './presentation/layouts/Layout';

function App() {
  return (
    <Layout>
      <ScrollToTop>
        <RenderRoutes routes={ROUTES}> </RenderRoutes>
      </ScrollToTop>
    </Layout>
  );
}

export default App;
