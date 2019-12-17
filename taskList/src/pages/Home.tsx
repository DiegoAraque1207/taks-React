import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, 
         IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, 
         IonCardContent, 
         IonIcon} from '@ionic/react';

import Modal from './Modal'
import React from 'react';


var tasks = [
  {
    "id": 0,
    "title": "mi primera tareita :v",
    "description": "hacer una segunda tarea",
    "priority": 1,
    "deadLine": "17/12/2019",
  },
  {
    "id": 1,
    "title": "Second Task",
    "description": "Es como avanzar en la vida :') ¿Qué tal una tercera?",
    "priority": 2,
    "deadLine": "17/12/2019",
  },
  {
    "id": 2,
    "title": "Tercera tarea, jijiji",
    "description": "Celebrar",
    "priority": 3,
    "deadLine": "17/12/2019",
  }
]

const List: React.FC = () => {
  return (
    <IonList>
      {
        tasks.map(task => {
          return (
            <IonCard key={task.id}>
              <IonCardHeader>
                <IonCardTitle>{task.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonCardSubtitle>Descripción:</IonCardSubtitle>
                {task.description}
              </IonCardContent>
              <IonItem class="activated">
                <IonLabel>Prioridad: {task.priority}</IonLabel>
              </IonItem>

              <IonItem class="activated">
                <IonIcon  name="md-add-circle"></IonIcon>
                <IonLabel>Fecha Limite: {task.deadLine}</IonLabel>
              </IonItem>
            </IonCard>
          )
          
        })
      }
    </IonList>
    
  )
}

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <List/>
        
        <Modal/>
      </IonContent>
      {/* <IonContent className="ion-padding">
        <List/>
        <IonButton color="success">Agregar</IonButton>
      </IonContent> */}
    </IonPage>
  );
  
};

export default Home;
