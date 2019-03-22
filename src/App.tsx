import * as React from 'react';
import MainView from './components/mainView/MainView';
import MainPage from './pages/mainPage/MainPage';
import AccessPolicies from './pages/accessPolicies/AccessPolicies';
import Consumers from './pages/consumers/Consumers';
import DataCatalog from './pages/dataCatalog/DataCatalog';
import DataLineage from './pages/dataLineage/DataLineage';
import Producers from './pages/producers/Producers';
import Topics from './pages/topics/Topics';
import { BrowserRouter, Route } from 'react-router-dom';
import { I18n } from 'react-i18nify';

class App extends React.Component {
  public render() {
    const makeNavigationItem = (text: string, pathRef: string, className: string) => {
      return (
        <li className="nav-item">
          <a className="nav-link" href={pathRef}>
            <i className={className} style={{ padding: '5px' }} />
            <span>{text}</span>
          </a>
        </li>
      );
    };

    return (
      <BrowserRouter>
        <MainView
          content={
            <div>
              <Route exact={true} path="/" component={MainPage} />
              <Route exact={true} path="/mainPage" component={MainPage} />
              <Route exact={true} path="/dataCatalog" component={DataCatalog} />
              <Route exact={true} path="/accessPolicies" component={AccessPolicies} />
              <Route exact={true} path="/topics" component={Topics} />
              <Route exact={true} path="/producers" component={Producers} />
              <Route exact={true} path="/consumers" component={Consumers} />
              <Route exact={true} path="/dataLineage" component={DataLineage} />
            </div>
          }
          leftMenu={
            <ul className="nav flex-column">
              {makeNavigationItem(
                I18n.t('dataCatalog.pages.mainPage.mainPage'),
                'mainPage',
                'fa fa-home'
              )}
              {makeNavigationItem(
                I18n.t('dataCatalog.pages.dataCatalog.dataCatalog'),
                'dataCatalog',
                'fa fa-clone'
              )}
              {makeNavigationItem(
                I18n.t('dataCatalog.pages.accessPolicies.accessPolicies'),
                'accessPolicies',
                'fa fa-lock'
              )}
              {makeNavigationItem(
                I18n.t('dataCatalog.pages.topics.topics'),
                'topics',
                'fa fa-object-group'
              )}
              {makeNavigationItem(
                I18n.t('dataCatalog.pages.producers.producers'),
                'producers',
                'fa fa-pencil'
              )}
              {makeNavigationItem(
                I18n.t('dataCatalog.pages.consumers.consumers'),
                'consumers',
                'fa fa-group'
              )}
              {makeNavigationItem(
                I18n.t('dataCatalog.pages.dataLineage.dataLineage'),
                'dataLineage',
                'fa fa-crosshairs'
              )}
            </ul>
          }
        />
      </BrowserRouter>
    );
  }
}

export default App;
