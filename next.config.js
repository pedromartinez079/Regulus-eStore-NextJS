const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                MONGODB_USER_DEV: 'regulus',
                MONGODB_PASSWORD_DEV: '7blBr9qoquYSLXPY',
                MONGODB_CLUSTER_DEV: 'RegulusEIRL',
            },
            
        };
    }

    return {
        env: {
            MONGODB_USER_PROD: 'user',
            MONGODB_PASSWORD_PROD: 'password',
            MONGODB_CLUSTER_PROD: 'RegulusEIRL',
        },
        
    };

    
};
