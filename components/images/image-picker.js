"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  function handlePickAnImage() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPickedImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>Please pick an image.</p>}
          {pickedImage && (
            <Image src={pickedImage} fill alt="Image Picked by the user" />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/*"
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickAnImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
