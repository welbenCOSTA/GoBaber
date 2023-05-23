export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  campareHash(payload: string, hashed: string): Promise<boolean>;
}
