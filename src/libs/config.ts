
const ConfigEnv = () => ({
    DOMAIN_SERVER: import.meta.env.VITE_NODE === 'development'?import.meta.env.VITE_DOMAIN_SERVER_DEVELOPMENT : import.meta.env.VITE_DOMAIN_SERVER_PRODUCTION,
    NODE_ENV:import.meta.env.VITE_NODE ?? 'development'
})


export const config = ConfigEnv()