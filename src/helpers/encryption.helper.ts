import Cryptr from "cryptr";

const encrypt = (key: string, value: string): string => {
  const cryptr = new Cryptr(key);
  const encrypted: string = cryptr.encrypt(value);
  return encrypted;
};

export default encrypt;
