import { useNavigate } from 'react-router-dom'

function Felicitation({ onClose }) {
  const navigate = useNavigate();

  const handleToutSavoir = () => {
    onClose();
    navigate('/tout-savoir');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Félicitations !</h2>
        <p className="text-base md:text-lg mb-6 text-center">Merci d'avoir participé au formulaire.</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={handleToutSavoir}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Aller à Tout Savoir
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Felicitation