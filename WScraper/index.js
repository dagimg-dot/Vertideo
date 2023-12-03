import fetch from "node-fetch";
import htmlparser from "htmlparser";
import { response } from "express";

/**
 * Initalizes a new WScraper instance
 */
class WScraper {
  /**
   * Initalizes a new WScraper instance
   */
  constructor() {
    this.html = "";
    this.parsedHtml = null;
  }

  /**
   *
   * @param {string} str
   * @returns {Array} Node []
   */
  fromStr(str) {
    this.html = str;
    this.parsedHtml = this.#parser();
    return this.parsedHtml;
  }

  /**
   *
   * @param {str} url
   * @returns {Array} Node []
   */
  async fromURL(url) {
    try {
      this.html = await this.#fetchHTML(url);
      this.parsedHtml = this.#parser();
      return this.parsedHtml;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  /**
   * fetches html from the provided url
   */
  async #fetchHTML(url) {
    try {
      const response = await fetch(url);
      const body = await response.text();
      if (body.includes("404")) {
        throw new Error("Page not found");
      }
      return body;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  /**
   *
   * @returns Node []
   */
  #parser() {
    const handler = new htmlparser.DefaultHandler((error, dom) => {
      if (error) throw new Error("Error occurred while parsing");
    });

    const parser = new htmlparser.Parser(handler);
    parser.parseComplete(this.html);
    return handler.dom;
  }

  /**
   *
   * @param {str} tagName
   * @returns {Array} Node []
   */
  getElementsByTagName = (tagName) => {
    const result = [];
    try {
      const finder = (_nodes) => {
        for (let obj of _nodes) {
          if (obj.type === "tag" && obj.name && obj.name === tagName) {
            result.push(obj);
          } else {
            if (obj.children) {
              finder(obj.children);
            } else {
              continue;
            }
          }
        }
      };

      finder(this.parsedHtml);
    } catch {
      throw new Error("There is an error while finding the element");
    }

    return result;
  };

  /**
   *
   * @param {str} className
   * @returns {Array} Node []
   */
  getElementsByClassName = (className) => {
    const result = [];
    try {
      const finder = (_nodes) => {
        for (let obj of _nodes) {
          if (
            obj.attribs &&
            obj.attribs.class &&
            obj.attribs.class === className
          ) {
            result.push(obj);
          } else {
            if (obj.children) {
              finder(obj.children);
            } else {
              continue;
            }
          }
        }
      };

      finder(this.parsedHtml);
    } catch {
      throw new Error("There is an error while finding the element");
    }
    return result;
  };

  /**
   *
   * @param {Array} nodeArr
   * @returns {Array} string []
   *
   * It is recommended to be as near as possible to the text of the node to eliminate unwanted results of white space and `&nbsp`
   */
  innerText(nodeArr) {
    const result = [];

    try {
      const finder = (_nodes) => {
        for (let obj of _nodes) {
          if (obj.data && !obj.children) {
            result.push(obj.data);
          } else {
            if (obj.children) {
              finder(obj.children);
            } else {
              continue;
            }
          }
        }
      };

      finder(nodeArr);
    } catch {
      throw new Error("There is an error while extracting text");
    }

    return result;
  }
}

export default WScraper;
