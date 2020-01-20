import {HttpService} from '../services/http';
import {API_BASE, ENDPOINTS} from '../configs/api';
import {CommonResponse} from '../models/api';
import {Breed} from '../models/cats';

export class CatsApi {
  public static async loadBreeds(): Promise<CommonResponse<Breed[]>> {
    const url = `${API_BASE}/${ENDPOINTS.BREEDS}`;
    const response = await HttpService.get(url);

    if (Array.isArray(response)) {
      return {
        success: true,
        data: response
      };
    }

    return {
      success: false,
      data: null,
      message: 'Breed loading error'
    };
  }
}
