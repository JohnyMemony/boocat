import {API_KEY} from '../configs/api';

export class HttpService {
  private static DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  };

  public static handleError(e: Error) {
    // TODO: add http errors handling
    console.log(e);
  };

  public static async get(url: string) {
    try {
      const response = await fetch(url, {
        headers: {
          ...this.DEFAULT_HEADERS
        }
      });

      return await response.json();
    } catch (e) {
      this.handleError(e);
    }
  }
}