import has from 'lodash/has';
import addSeconds from 'date-fns/addSeconds';
import { IBrowserStorage, TCacheStructure } from './Domain';

class BrowserStorage implements IBrowserStorage {
  public get<T>(key: string, tag: string): T | null {
    const data: TCacheStructure = JSON.parse(localStorage.getItem(`${tag}:${key}`));
    if (!data || !has(data, 'expire')) { return null; }

    // проверяем не протух ли кеш
    if (data.expire < new Date().getTime()) {
      this.remove(key, tag);
      return null;
    }

    return data.value;
  }

  public set<T>(key: string, tag: string, value: any, ttl = 60): T {
    const expireDate = addSeconds(new Date(), ttl);
    const preparedValue: TCacheStructure = {
      expire: expireDate.getTime(),
      value
    };

    localStorage.setItem(`${tag}:${key}`, JSON.stringify(preparedValue));

    return value;
  }

  public remove(key: string, tag: string): this {
    localStorage.removeItem(`${tag}:${key}`);
    return this;
  }

  public clear(): this {
    localStorage.clear();
    return this;
  }

  public checkStorageExpiryDate(): void {
    const storageExpiryDate: number = +localStorage.getItem('storage:expire');
    const isTimeToCheckStorageKeys = !storageExpiryDate || storageExpiryDate - Date.now() < 0;
    if (isTimeToCheckStorageKeys) {
      Object.getOwnPropertyNames(localStorage).forEach((item: string) => {
        const jsonItem: any = this.convertFromJSONString(localStorage.getItem(item));

        if (jsonItem) {
          const { expire } = jsonItem;
          const isExpired = expire && expire - Date.now() < 1;

          if (isExpired) {
            localStorage.removeItem(item);
          }
        }
      });

      localStorage.setItem('storage:expire', String(+addSeconds(Date.now(), 604800)));
    }
  }

  private convertFromJSONString(json: any): any {
    try {
      return JSON.parse(json);
    } catch {
      return null;
    }
  }
}

export default new BrowserStorage();
