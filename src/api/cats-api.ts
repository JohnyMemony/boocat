import {HttpService} from '../services/http';
import {API_BASE, ENDPOINTS} from '../configs/api';
import {CommonResponse} from '../models/api';
import {Breed, CatImage} from '../models/cats';

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
      message: 'Breeds list loading error'
    };
  }

  public static async getImagesByBreedId(breedId: string): Promise<CommonResponse<CatImage[]>> {
    const url = `${API_BASE}/${ENDPOINTS.IMAGES_SEARCH}?breed_ids=${breedId}`;
    const response: CatImage[] = await HttpService.get(url);

    if (response && response.length) {
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
