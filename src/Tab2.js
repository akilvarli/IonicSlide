import * as React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonItem,
  IonLabel
} from "@ionic/react";
import { useOvermind } from "./overmind";

const Tab2 = () => {
  const { state, actions } = useOvermind();

  const updateValue = () => {
    actions.setValue({
      value: new Date().toISOString(),
      changedBy: "TAB2"
    });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TAB ONE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>TAB TWO</h2>
        <div>
          <IonItem>
            <IonLabel>value</IonLabel>
            <pre>{state.value}</pre>
          </IonItem>
          <IonItem>
            <IonLabel>Changed By</IonLabel>
            <pre>{state.changedBy}</pre>
          </IonItem>
        </div>
        <IonButton onClick={() => updateValue()}>Update Value</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
