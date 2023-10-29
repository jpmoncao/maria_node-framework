import { sequelize } from './config/database.js';
import { models } from './config/models.js';
import Application from './server.js';

(async () => {
    try {
        await sequelize.sync();
        await models.sync();
        await Application.init();
    } catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
    }
})();
