import "./App.css";
import RegistrationForm from "./component/RegistrationForm";
import Order from "./component/Order";
import ErrorBoundary from "./component/ErrorBoundary";
import ShowOrder from "./component/ShowOrder";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <RegistrationForm />
      </ErrorBoundary>
      <ErrorBoundary>
        <Order />
      </ErrorBoundary>
      <ErrorBoundary>
        <ShowOrder />
      </ErrorBoundary>
    </div>
  );
}

export default App;
