import { IService, TDictionary } from './Domain';
import { IBrowserStorage } from '~/core/cache/Domain';
import cache from '~/core/cache/cache';
import { EHttpCodes } from '~/@types/http';
import { ECacheKeys, ECacheTags } from '~/@types/cache';
import { ONE_DAY } from '~/constants/time';
import { ISwagger } from '~/@types/plugins';

export default class Service implements IService {
  private readonly cache: IBrowserStorage;
  constructor(private swagger: ISwagger) {
    this.cache = cache;
    this.swagger = swagger;
  }

  public async read(): Promise<TDictionary> {
    const cacheDictionary = this.cache.get<TDictionary>(ECacheKeys.DICTIONARY_ALL, ECacheTags.DICTIONARY);
    if (cacheDictionary) { return cacheDictionary; }

    const { data, status } = await this.swagger.dictionary.read();
    if (status !== EHttpCodes.SUCCESS) {
      return null;
    }

    this.cache.set<TDictionary>(ECacheKeys.DICTIONARY_ALL, ECacheTags.DICTIONARY, data, ONE_DAY);
    return data;
  }
}
