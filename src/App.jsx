
function App() {
    const name = "Facundo";
    const apellido = "Steckler";

    return (
        <div>
            <h1>Bienvenido {name} {apellido}</h1>
            <button style={{
                color: "red",
                backgroundColor: "blue",
                fontSize: "15px"
            }}>Inicio</button>
        </div>
    );
}

export default App;