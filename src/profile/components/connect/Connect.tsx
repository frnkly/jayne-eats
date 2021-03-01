import { useContext, useState } from 'react';

import GoogleSheet from './ImportGoogleSheet';
import Selector from './Selector';
import UploadCsv from './UploadCsv';
import { GapiAuthContext } from '../../../gapi';

export default function Connect() {
  const hasGapiAuth = useContext(GapiAuthContext);
  const [hasCsv, setCsv] = useState(false);

  switch (true) {
    case hasGapiAuth:
      return <GoogleSheet />;

    case hasCsv:
      return <UploadCsv onCancel={() => setCsv(false)} />;

    default:
      return <Selector onSelectCsv={() => setCsv(true)} />;
  }
}
