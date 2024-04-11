import { Sequelize } from "sequelize";
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('solana-invest', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối tới project_nd1 thành công..');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connection;