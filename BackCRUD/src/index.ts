import app from './app';
import AppDataSource from './db/conecction';

async function main() {
    try{
        await AppDataSource.initialize(); //Inicializa la conexión a la base de datos
        app.listen(3000, () => {
            console.log("Server activo");
        })
    }catch(err){
        if(err instanceof Error){
            console.log(err.message);
        }
    }
}

main();