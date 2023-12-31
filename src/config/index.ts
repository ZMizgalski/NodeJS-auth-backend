import { LocalPort } from './consts';
import { PickEnvConfig } from './utils';
import merge from 'lodash.merge';


process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const stage = process.env.STAGE || 'local'

const envConfig = PickEnvConfig(stage);

export default merge({
    stage,
    env: process.env.NODE_ENV,
    port: LocalPort,
    secrets: {
        jwt: process.env.JWT_SECRET,
        dbUrl: process.env.DATABASE_URL
    }
}, envConfig);