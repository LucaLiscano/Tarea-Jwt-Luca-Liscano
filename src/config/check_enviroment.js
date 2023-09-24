export const checkPort = (port) => {
  if (!port || port.trim() === "") {
    console.error("La variable de entorno PORT no esta completa");
    process.exit(1);
  }
};

export const checkDatabaseUrl = (databaseUrl) => {
  if (!databaseUrl || databaseUrl.trim() === "") {
    console.error("la variable de entorno DATABASE_URL no esta completa");
    process.exit(1);
  }
};
