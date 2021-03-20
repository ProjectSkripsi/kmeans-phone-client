import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const DataList = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './phones')
);
const DetailPhone = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './detail')
);

const PagesProduct = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/data-list`} />
      <Route
        path={`${match.url}/data-list`}
        render={(props) => <DataList {...props} />}
      />
      <Route
        path={`${match.url}/details`}
        render={(props) => <DetailPhone {...props} />}
      />

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default PagesProduct;
