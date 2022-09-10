import { getQueryParams } from '~/helpers';

export class Proto {
  constructor($config, store, error) {
    this.$config = $config;
    this.store = store;
    this.error = error;
  }

  /**
   * Сделать запрос на сервер, если передан ?debug то в консоль будет выводится дебаг инфо по запросам
   * @param {string} url
   * @param {Object} request proto объект
   * @param {Object} responseWrapper proto объект который обработает ответ
   * @return {Object}
   */
  async post(url, request, responseWrapper, isSilent = false) {
    const isDebug = getQueryParams().hasOwnProperty('debug');
    let response;

    if (isDebug) {
      console.info('Request:POST', `${this.$config.baseUrl}${url}`, request.toObject());
      console.info('Request:POST', `${this.$config.baseUrl}${url}`, JSON.stringify(request.toObject()));
    }

    if (!isSilent) {
      this.store.commit('Core/setIsLoading', null, { root: true });
    }

    try {
      response = await fetch(`${this.$config.baseUrl}${url}`, {
        method: 'POST',
        body: request.serializeBinary()
      });
    } catch (e) {
      this.error({
        statusCode: 500,
        message: `Не удалось выполнить запрос на ${this.$config.baseUrl}${url}`
      });
      return null;
    }

    if (!response.ok) {
      this.error({
        statusCode: response.status,
        message: `Не удалось выполнить запрос на ${this.$config.baseUrl}${url}`
      });
      return null;
    }

    const result = await response.arrayBuffer();
    const responseDeserialize = responseWrapper.deserializeBinary(result);

    if (isDebug) {
      console.info('Response:POST', `${this.$config.baseUrl}${url}`, responseDeserialize.toObject());
      console.info('Response:POST', `${this.$config.baseUrl}${url}`, JSON.stringify(responseDeserialize.toObject()));
    }

    if (!isSilent) {
      this.store.commit('Core/removeIsLoading', null, { root: true });
    }

    return responseDeserialize;
  }
}
