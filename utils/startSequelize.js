import { Sequelize } from "sequelize"

/**
 * 
 * @param {Sequelize} sequelize 
 */

export const startSeqelize = async (sequelize) =>{
  try {
    await sequelize.authenticate();
    await sequelize.sync({alter: true})
    console.log("Connection to databases");
    console.log(`Models available in sequelize: ${Object.keys(sequelize.models)}`);
    
  } catch (error) {
    console.log("Connection failed", error)
  }

}

