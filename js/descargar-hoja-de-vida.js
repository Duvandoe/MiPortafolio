function descargarHojaDeVida() {
    const enlace = document.createElement("a"); // Crear un elemento <a>
    enlace.href = "/public/hoja-de-vida-duvan-cardona.pdf"; // Ruta del archivo PDF
    enlace.download = "Hoja_de_Vida_Duvan_Cardona.pdf"; // Nombre del archivo para la descarga
    enlace.click(); // Disparar la descarga
  }