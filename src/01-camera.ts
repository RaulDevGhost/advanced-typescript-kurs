//example for enum in this Library
//in the source code of the lib:
// export declare enum CameraResultType {
//     Uri = "uri",
//     Base64 = "base64",
//     DataUrl = "dataUrl"
// }

import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    direction: CameraDirection.Front,
  });
};
