import Cryptr from "cryptr";

const decrypt = (key: string, value: string): string => {
  const cryptr = new Cryptr(key);
  const decrypted: string = cryptr.decrypt(value);
  return decrypted;
};

export default decrypt;
