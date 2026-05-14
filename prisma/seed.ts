async function main() {
  console.log("Nenhuma conta demo foi criada.");
  console.log("Proximo passo sugerido:");
  console.log("1. Abra /cadastro/porteiro para criar a primeira conta operacional.");
  console.log("2. Abra /cadastro/morador para criar contas reais de moradores.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
