
import alias from '../build/data/alias';
import getScript from './getScript';

const gfextradata = ({ locale }) => ({
  alias,
  getScript: getScript(locale),
});

export default gfextradata;
