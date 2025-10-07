import { createImgIcon, createPrimeIcon } from "@/utilities/ComponentUtilities";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import GenericButton from "../GenericButton/GenericButton";
import PaymentOptionsCard from "./PaymentOptionsCard";
import './PaymentOptionsDialog.css';
import type { PolicyPayment } from "@/types/CommonTypes";

type PaymentOptionsDialogProps = {
    visible: boolean;
    setVisible: (newValue: boolean) => void;
    selectedPayment: PolicyPayment;
}

const PaymentOptionsDialog: React.FC<PaymentOptionsDialogProps> = ({ visible, setVisible, selectedPayment}) => {
    const dialogHeader = () => {
        return (
            <div className="payment-options-dialog-header">
                <p className="payment-options-dialog-header-title">Opciones de pago</p>
                <p className="payment-options-dialog-header-subtitle">Pago de {selectedPayment.ammount} - {selectedPayment.date}</p>
            </div>
        )
    }
    const navigateToColdview = () => {
        window.open('https://www.coldview.com', '_blank', 'noopener,noreferrer');
    }

    const qrCodeMainPart = (
        <div className="payment-options-card-content-img-container">
            <img src="/qr_example.png" height={100} width={100} className='payment-options-card-content-img dotted' />
        </div>
    )

    const barcodeMainPart = (
        <div className="payment-options-card-content-img-container" style={{marginTop: '1.5rem'}}>
            <img src="/barcode.gif" height={100} width={300} className='payment-options-card-content-img dotted' />
        </div>
    )

    const cardsMainPart = (
        <>
            <p className="payment-options-card-content-description">Medios de pago disponibles</p>
            <div className="payment-options-card-content-card-brands">
                <img src="/icons/visa.png" className="payment-options-card-content-card-brand"/>
                <img src="/icons/card.png" className="payment-options-card-content-card-brand"/>
                <img src="/icons/american-express.png" className="payment-options-card-content-card-brand"/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <GenericButton label={"Ir al sistema de pagos"} onClick={() => navigateToColdview()} className="payment-options-card-content-pay-button"/>
            </div>
            
        </>
    )
    return (
        <Dialog onHide={() => setVisible(false)} visible={visible} header={dialogHeader}>
            <div className="payment-options-dialog-content">
                <PaymentOptionsCard headerIcon={createPrimeIcon('pi-qrcode', 'payment-options-card-header-icon', true, 'payment-options-card-header-icon-container')}
                    title="Código QR" description="Escanea el codigo con tu Aplicacion de banco movil y paga este concepto."
                    subtext="Codigo QR para pago inmediato" mainPart={qrCodeMainPart} />
                <Divider layout="vertical" className="hidden md:flex">
                    <b>O</b>
                </Divider>
                <PaymentOptionsCard headerIcon={createPrimeIcon('pi-qrcode', 'payment-options-card-header-icon', true, 'payment-options-card-header-icon-container')}
                    title="Codigo de barra" description="Presenta este codigo en cualquier punto de pago "
                    subtext="4567 8901 2345 6789 0123" mainPart={barcodeMainPart} />
                <Divider layout="vertical" className="hidden md:flex">
                    <b>O</b>
                </Divider>
                <PaymentOptionsCard headerIcon={createImgIcon('/icons/credit-card.png', 'payment-options-card-header-imgicon', true, 'payment-options-card-header-icon-container')}
                    title="Tarjeta de Crédito/Débito"
                    description="Paga de manera segura con cualquiera de tus tarjetas bancarias!"
                    subtext="Seras redirigido a nuestro sistema seguro de pagos online" mainPart={cardsMainPart} />
            </div>
        </Dialog>
    )
}

export default PaymentOptionsDialog;