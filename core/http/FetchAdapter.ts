// import { IEventBus } from '../bus/Domain';
// import { IFetchAdapter } from './IFetchAdapter';
// import customFetch from './customFetch';

// export class FetchAdapter implements IFetchAdapter {
//   $bus: IEventBus;
//   $config: any;
//   store: any;
//   error: any;
//   $auth: any;

//   constructor($bus: IEventBus, $auth: any, $config: any, store: any, error: any) {
//     this.$bus = $bus;
//     this.$config = $config;
//     this.$auth = $auth;
//     this.store = store;
//     this.error = error;
//   }

//   async get(url: string, isSilent = false, config = {}): Promise<Response | null> {
//     return await this.request(`${this.$config.baseUrl}${url}`, 'get', {}, isSilent, config);
//   }

//   async post(url: string, body = {}, isSilent = false, config = {}): Promise<Response | null> {
//     return await this.request(`${this.$config.baseUrl}${url}`, 'post', body, isSilent, config);
//   }

//   async request(url: string, method: string, body = {}, isSilent = false, config: any): Promise<Response | null> {
//     const token = this.$auth.getTokens();
//     if (!isSilent) {
//       this.store.commit('Core/setIsLoading', null, { root: true });
//     }

//     const init = {
//       method,
//       headers: new Headers({
//         Authorization: `Bearer ${token.access_token}`
//       }),
//       ...config
//     };

//     if (method === 'post') {
//       // @ts-ignore
//       init.body = body;
//     }

//     const urlObject = new URL(url);
//     const fullUrl = urlObject.toString();
//     const response = await customFetch(this.$bus)(fullUrl, init);
//     if (!isSilent) {
//       this.store.commit('Core/removeIsLoading', null, { root: true });
//     }
//     return response;
//   }
// }
