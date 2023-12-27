import RemoteApp1Routers from 'checkout/Routers';
import RemoteApp2Routers from 'search/Routers';
import Local from './Local';

const Routers = () => [
  Local(),
  { ...RemoteApp2Routers() },
  { ...RemoteApp1Routers() },
];

export default Routers;
