//
//  PUERTO
//
process.env.PORT = process.env.PORT || 3000;

//
//  VENCIMIENTO_TOKEN
//
// 60 seg. x 60 min x 24 horas x 30 días = 1 mes
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//
//  SEED (SEMILLA DEL TOKEN)
//
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'