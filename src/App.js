import Apples from "./Apples";

function App(){
    const name ="Susan";
    const day ="Friday";

    return (
        <div>
            <h1>Shopping List for {name} to be done on {day}</h1>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Cake</li>
                <li>Juice</li>
                <li>Salt</li>
            </ul>
            <Apples/>
        </div>
    );
}
export default App;