alert("Bienvenido al sistema informático de la clínica MA");

let elegirOperacion = Number(prompt(`                   
1- Registrar nuevo paciente.    
2- Eliminar paciente.      
3- Actualizar información del paciente.
4- Consultar información del paciente.
0- Para salir.`));

class Persona {
    constructor(nombre, apellido, dni, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}

const pacienteMatias = new Persona("Matias", "Arruarte", 40546765);
const pacienteSamuel = new Persona("Samuel", "Profeussor", 30986432);
const pacienteFederico = new Persona("Federico", "Castro", 20384743);
const pacienteCoder = new Persona("Coddy", "Casas", 11222333);

const arrayPacientes = [];

arrayPacientes.push(pacienteMatias);
arrayPacientes.push(pacienteSamuel);
arrayPacientes.push(pacienteFederico);
arrayPacientes.push(pacienteCoder);

console.log(arrayPacientes);

function registroPaciente() {
    let nombre = parseInt(prompt(`Ingrese el nombre del paciente: `));
    let apellido = prompt(`Ingrese el apellido del paciente: `);
    let dni = prompt(`Ingrese el DNI del paciente: `);
    let paciente = new Persona(nombre, apellido, dni);
    arrayPacientes.push(paciente);
    console.log(arrayPacientes);
}

function eliminarPaciente() {
    let dni = parseInt(prompt("Ingrese el DNI del paciente: "));
    let paciente = arrayPacientes.find(paciente => paciente.dni === dni);
    let i = arrayPacientes.indexOf(paciente);
    arrayPacientes.splice(i, 1);
    console.log(arrayPacientes);
}

function actualizarPaciente() {
    let dni = parseInt(prompt("Ingrese el DNI del paciente: "));
    let paciente = arrayPacientes.find(paciente => paciente.dni === dni);
    let i = arrayPacientes.indexOf(paciente);
    let nombre = prompt("Ingrese el nombre del paciente:  ");
    let apellido = prompt("Ingrese el apellido del paciente:  ");
    let pacienteActualizado = new Persona(nombre, apellido, dni);
    arrayPacientes.splice(i, 1, pacienteActualizado);
    console.log(arrayPacientes);
}

function consultaPaciente() {
    let dni = parseInt(prompt("Ingrese el DNI del paciente: "));
    let paciente = arrayPacientes.find(paciente => paciente.dni === dni);
    alert(`Paciente: ${paciente.nombre} ${paciente.apellido}.`);
}


while (elegirOperacion != "0") {
    switch (elegirOperacion) {
        case 1:
            registroPaciente();
            break;
        case 2:
            eliminarPaciente();
            break;
        case 3:
            actualizarPaciente();
            break;
        case 4:
            consultaPaciente();
            break;
        default:
            alert(`Ingrese una opción correcta.`)
            break;
    }

    elegirOperacion = Number(prompt(`
    1- Registrar nuevo paciente.    
    2- Eliminar paciente.      
    3- Actualizar información de paciente.
    4- Consultar información de paciente.
    0- Para salir.`));

};

alert(`¡Muchas gracias por usar el sistema informático de la Clinica MA.`);
