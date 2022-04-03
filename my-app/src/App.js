import MapComponent from "./component/map";
import TableComponent from "./component/table";
import FormDelivery from "./component/formDelivery";

function App() {
  return (
      <div>
          <div className="container">
              <TableComponent />
              <MapComponent />
          </div>
          <FormDelivery />
      </div>
  );
}

export default App;
