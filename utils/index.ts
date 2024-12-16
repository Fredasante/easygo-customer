import CryptoJS from "crypto-js";
import { toast } from "sonner";

export function decryptToken(token: string): string {
  let bytes = CryptoJS.AES.decrypt(
    token,
    process.env.NEXT_PUBLIC_ENC_KEY as unknown as string
  );
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

export const handleApiError = (error: any) => {
  if (error.response?.data?.message) {
    toast.error(error.response.data.message);
  } else if (!error.response) {
    toast.error("Network error. Check your internet connection.");
  } else if (error.response?.status === 500) {
    toast.error("Server error. Please try again later.");
  } else {
    toast.error("An unexpected error occurred.");
  }
};
