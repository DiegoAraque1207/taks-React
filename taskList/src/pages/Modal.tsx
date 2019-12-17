import React, { useState} from 'react';
import { IonModal, IonButton, IonContent, IonItem, IonInput, IonLabel, IonTextarea, IonDatetime } from '@ionic/react';




const Modal: React.FC = () =>  {
    const [showModal, setShowModal] = useState(false);
    return (
        <IonContent>
        <IonModal isOpen={showModal}>
            <IonContent>
                <IonItem>
                    <IonLabel position="floating">Titulo</IonLabel>
                    <IonInput onIonInput={(e) => alert((e.target as HTMLInputElement).value)}></IonInput>
                </IonItem>  
                <IonItem>
                    <IonLabel position="floating">Description</IonLabel>
                    <IonTextarea></IonTextarea>
                </IonItem>
                
                <IonItem>
                    <IonLabel position="floating">Prioridad</IonLabel>
                    <IonInput type="number" min="1" max="10" value="1" onIonChange={(e) => alert((e.target as HTMLInputElement).value)}></IonInput>
                </IonItem>
                
    
                <IonItem>
                    <IonLabel position="floating">Fecha Límite</IonLabel>
                    <IonDatetime displayFormat="DDDD MMM D, YYYY" max={((new Date()).getFullYear() + 30).toString()} value={Date.now().toString()} ></IonDatetime>
                </IonItem>
    
                <IonItem>
                    <IonLabel position="floating">Hora Límite</IonLabel>
                    <IonDatetime displayFormat="HH:mm"></IonDatetime>
                </IonItem>
    
    
            </IonContent>
    
            <IonItem>
                <IonButton onClick={() => setShowModal(false)}>Cancelar</IonButton>
                <IonButton onClick={() => alert("Aun en construcción :v")}>Guardar</IonButton>
            </IonItem>
            
        </IonModal>
        <IonButton color="success" onClick={() => setShowModal(true)}>Agregar</IonButton>
        </IonContent>
    );
};

export default Modal;