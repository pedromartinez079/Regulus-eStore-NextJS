const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                MONGODB_USER_DEV: 'user_dev',
                MONGODB_PASSWORD_DEV: 'password_dev',
                MONGODB_CLUSTER_DEV: 'cluster_dev',
            },
            
        };
    }

    return {
        env: {
            MONGODB_USER_PROD: 'user',
            MONGODB_PASSWORD_PROD: 'password',
            MONGODB_CLUSTER_PROD: 'cluster',
        },
        
    };

    
};
