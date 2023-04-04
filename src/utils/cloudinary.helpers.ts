import axios from "axios";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;
const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string;

const baseUrl = `https://api.cloudinary.com/v1_1/${cloudName}`;

export const makeUploadRequest = async ({ file }: { file: string }) => {
  const url = `${baseUrl}/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("return_delete_token", "true");

  const { data } = await axios.post(url, formData);

  return data;
};

export const makeDeleteRequest = async ({
  deleteToken,
}: {
  deleteToken: string;
}) => {
  const url = `${baseUrl}/delete_by_token`;

  const formData = new FormData();
  formData.append("token", deleteToken);

  const { data } = await axios.post(url, formData);

  return data;
};
