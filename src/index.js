
import alias from '../build/data/alias';
import getScript from './getScript';

const gfextradata = ({ locale }) => ({ alias, script: getScript(locale) });

export default gfextradata;
