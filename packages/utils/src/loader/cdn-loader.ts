import { Deferred } from './deferred.js';

const FETCH_API_TIMEOUT = 300_000; /* 5 mins */

/**
 * Caches and provides any load results, Loaded either by name from CDN or directly by URL.
 */
export class CDNLoader {
  /**
   * Internal response cache
   */
  private responseCache = new Map<string, Promise<Response>>();

  /**
   * CDN prefix to prepend to src
   */
  private cdnPrefix = new Deferred<string>();

  /**
   * @returns {boolean} clarify whether the prefix has been resolved or not.
   */
  public get isPrefixResolved(): boolean {
    return this.cdnPrefix.isResolved();
  }

  /**
   * @returns {boolean} clarify whether the prefix is pending or not.
   */
  public get isPrefixPending(): boolean {
    return this.cdnPrefix.isPending();
  }
  /**
   * @returns promise, which will be resolved with CDN prefix, once set.
   */
  public getCdnPrefix(): Promise<string> {
    return this.cdnPrefix.promise;
  }

  /**
   * Sets CDN prefix to load source.
   * Resolves deferred promise with the provided CDN prefix.
   * If the prefix is falsy, reject instead.
   * @param prefix - CDN prefix.
   * @returns {void}
   */
  public setCdnPrefix(prefix: string): void {
    /**
     * CDN prefix comes from a value of CSS custom property.
     * As this retrieval is expensive performance-wise,
     * its value would be settled in a single call.
     */
    if (prefix) {
      this.cdnPrefix.resolve(prefix);
    } else {
      this.cdnPrefix.reject('');
    }
  }

  /**
   * Asynchronously tries to load
   * @param href The location of the SVG to load
   * @returns Promise of the SVG body
   */
  private async loadContent(href: string): Promise<Response> {
    let response: Response;
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), FETCH_API_TIMEOUT);
    try {
      response = await fetch(href, { signal: abortController.signal });
    } catch (e) {
      // Failed response. Prevent the item attached in cache.
      this.responseCache.delete(href);
      let errorMessage = '';
      if (e instanceof Error) {
        errorMessage = e.message;
      } else if (e instanceof Response) {
        errorMessage = e.statusText;
      }
      response = {
        status: 0,
        statusText: errorMessage
      } as Response;
    } finally {
      clearTimeout(timeoutId);
    }
    return response;
  }

  /**
   * Tries to load an src either by src or by provided URL
   * @param src name or Source location.
   * @returns Promise which will be resolved with response body
   */
  public async load(src: string): Promise<Response | undefined> {
    if (src) {
      if (!this.responseCache.has(src)) {
        this.responseCache.set(src, this.loadContent(src));
      }
      return this.responseCache.get(src);
    }
  }
}
