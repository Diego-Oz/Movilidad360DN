// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBxx8bxy_ZWCCrA0XxzM2ed0GuXfR-dZN8",
    authDomain: "movilidad-dn.firebaseapp.com",
    projectId: "movilidad-dn",
    storageBucket: "movilidad-dn.appspot.com",
    messagingSenderId: "1084567359712",
    appId: "1:1084567359712:web:4ecd508eedb0789874c085",
    measurementId: "G-S7YE4FLN17"
};

// Inicializa Firebase y Firestore
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Referencia al formulario y a la tabla
const form = document.getElementById("data-form");
const tableBody = document.getElementById("data-table-body");

// Función para mostrar datos desde Firebase
const mostrarDatos = () => {
    db.collection("usuarios").onSnapshot(snapshot => {
        tableBody.innerHTML = ""; // Limpiar tabla
        snapshot.forEach(doc => {
            const data = doc.data();
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${data.nombre}</td>
                <td>${data.edad}</td>
                <td><button class="delete-btn" onclick="eliminarRegistro('${doc.id}')">Eliminar</button></td>
            `;
            tableBody.appendChild(row);
        });
    });
};

// Función para añadir un nuevo registro
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    try {
        await db.collection("usuarios").add({ nombre, edad: parseInt(edad) });
        form.reset();
        console.log("Registro añadido");
    } catch (error) {
        console.error("Error al añadir registro: ", error);
    }
});

// Función para eliminar un registro
const eliminarRegistro = async (id) => {
    try {
        await db.collection("usuarios").doc(id).delete();
        console.log("Registro eliminado");
    } catch (error) {
        console.error("Error al eliminar registro: ", error);
    }
};

// Inicializar mostrando datos
mostrarDatos();
