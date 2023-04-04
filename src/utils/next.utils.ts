export const checkIsServer = (): Boolean => {
  return typeof window === "undefined";
};

export const convertToBase64 = (
  file: File
): Promise<string | ArrayBuffer | null> => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      res(reader.result);
    };
    reader.onerror = function (error) {
      rej(error);
    };
  });
};

export const reloadSession = () => {
  const event = new Event("visibilitychange");
  document.dispatchEvent(event);
};
