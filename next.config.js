const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                MONGODB_USER_DEV: 'nextjs',
                MONGODB_PASSWORD_DEV: 'YdCCrt7cQrVZ7j3v',
                MONGODB_CLUSTER_DEV: 'RegulusEIRL',
            },
            
        };
    }

    return {
        env: {
            MONGODB_USER_PROD: 'user',
            MONGODB_PASSWORD_PROD: 'password',
            MONGODB_CLUSTER_PROD: 'db',
        },
        
    };

    
};
