import RemoteApp1Routers from 'checkout/routers';
import RemoteApp2Routers from 'search/routers';
import Local from './Local';

const Routers = () => [
  Local(),
  { ...RemoteApp2Routers() },
  { ...RemoteApp1Routers() },
];

export default Routers;
