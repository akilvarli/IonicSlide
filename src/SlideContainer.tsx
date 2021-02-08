import React, { useState } from "react";
import { IonSlides, IonSlide, IonContent, IonButton } from "@ionic/react";
import { useRef } from "react";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

export const SlideContainer: React.FC = () => {
  const mySlides = useRef(null);

  // const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  // const [disableNextBtn, setDisableNextBtn] = useState(false);

  const handleSlideChange = async () => {
    const swiper = await mySlides.current.getSwiper();
    // setDisablePrevBtn(swiper.isBeginning);
    // setDisableNextBtn(swiper.isEnd);
  };

  /**
   *
   * @param direction
   */
  const onBtnClicked = async (direction: string) => {
    const swiper = await mySlides.current.getSwiper();
    if (direction === "next") {
      swiper.slideNext();
    } else if (direction === "prev") {
      swiper.slidePrev();
    }
  };

  return (
    <IonContent>
      <IonSlides
        options={slideOpts}
        ref={mySlides}
        onIonSlideDidChange={handleSlideChange}
      >
        <IonSlide>ONE</IonSlide>
        <IonSlide>TWO</IonSlide>
        <IonSlide>THREE</IonSlide>
      </IonSlides>
      <div style={{ textAlign: "center", paddingTop: 12 }}>
        <IonButton
          disabled={mySlides.current?.isBeginning}
          onClick={() => onBtnClicked("prev")}
        >
          PREV
        </IonButton>
        <IonButton
          disabled={mySlides.current?.isEnd}
          onClick={() => onBtnClicked("next")}
        >
          NEXT
        </IonButton>
      </div>
    </IonContent>
  );
};

export default SlideContainer;
