import { AllTrips } from "./components/AllTrips/AllTrips";
import { SelectedTrip } from "./components/SelectedTrip/SelectedTrip";
import { Modal } from "./components/common/Modal/Modal";
import { useModal } from "./providers/ModalProvider";
import { useStorage } from "./providers/StorageProvider";

function App() {
  const { isOpen, setIsOpen } = useModal();
  const { currentWeather, weather } = useStorage();

  return (
    <div className="wrapper">
      <AllTrips />
      <SelectedTrip
        deadline={weather?.days[0].datetime ?? ""}
        currentWeather={currentWeather}
      />
      {isOpen && <Modal close={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
