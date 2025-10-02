import { useEffect } from 'react';
import { IconX, IconAlertCircle } from '@tabler/icons-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal = ({ isOpen, onClose }: DisclaimerModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-icon">
            <IconAlertCircle size={32} />
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Fechar">
            <IconX size={24} />
          </button>
        </div>
        <div className="modal-body">
          <h2>Aviso Importante!</h2>
          <p className="modal-highlight">
            Este é um projeto de portfólio desenvolvido para fins demonstrativos.
          </p>
          <div className="modal-disclaimer">
            <p>
              <strong>Todos os dados apresentados neste site são meramente ilustrativos:</strong>
            </p>
            <ul>
              <li>Nomes de empresas e pessoas são fictícios</li>
              <li>Valores e preços são exemplificativos</li>
              <li>Contatos, telefones e e-mails não são reais</li>
              <li>Depoimentos são criados para fins de demonstração</li>
              <li>Endereços e localidades são ilustrativos</li>
            </ul>
            <p>
              O objetivo deste projeto é demonstrar habilidades em desenvolvimento web, design de interfaces e criação de experiências de usuário.
            </p>
            <p className="modal-footer-text">
              Nenhuma transação comercial real pode ser realizada através deste site.
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Entendi
          </button>
        </div>
      </div>
    </>
  );
};

export default DisclaimerModal;
