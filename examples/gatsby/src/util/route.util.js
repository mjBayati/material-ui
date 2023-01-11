import templatesConfig from '../config/templates.config';
import envUtil from './env.util';
import stringUtil from './string.util';

const templateTypeConfig = require('../config/templates.config');

export default {
  getPageLinkByType(templateType, slug, isListing) {
    if (
      [templatesConfig.BLOG, templateTypeConfig.KNOWLEDGE_BASE].includes(
        templateType,
      )
    ) {
      return this.getPostLinkByType(templateType, slug, isListing);
    }
    return `/${slug}/`;
  },
  getPostLinkByType(templateType, slug, isListing) {
    let blogPostPrefix = '/blog/';
    if (isListing) {
      blogPostPrefix = '/';
    }
    return (
      (templateType === templateTypeConfig.KNOWLEDGE_BASE
        ? '/knowledge-base/'
        : blogPostPrefix) +
      slug +
      '/'
    );
  },
  getPostsMainPageRoute(templateType) {
    return templateTypeConfig.BLOG === templateType
      ? '/blog/'
      : '/knowledge-base/';
  },
  getWriterLinkById(writerId) {
    return `/author/${writerId}/`;
  },
  isInternal(url) {
    return (
      url.indexOf(process.env.GATSBY_SITE_URL) !== -1 ||
      url.indexOf('https://cloudzy.com') !== -1 ||
      url.indexOf('https') === -1
    );
  },
  isArticle(templateType) {
    return (
      templateType === templatesConfig.KNOWLEDGE_BASE ||
      templateType === templatesConfig.BLOG
    );
  },
  normalizeInternalLink(link) {
    const isDev = envUtil.isDevelopment();
    return isDev
      ? this.normalizeWithPostfix(link, '/')
      : process.env.GATSBY_SITE_URL + this.normalizeWithPostfix(link, '/');
  },
  isFile(url) {
    const fileTypes = [
      'svg',
      'webp',
      'ico',
      'gif',
      'jpg',
      'jpeg',
      'ttf',
      'woff',
      'woff2',
      'png',
    ];
    return fileTypes.some((type) => url.indexOf(`.${type}`) !== -1);
  },
  normalizeWithPostfix(input, postfix) {
    if (this.isInternal(input) && this.isFile(input)) {
      return stringUtil._removePostFix(input, postfix);
    }
    if (stringUtil._hasQueryParams(input)) {
      return stringUtil._removePostFix(input, postfix);
    }
    if (stringUtil._hasSharpSign(input)) {
      return stringUtil._removePostFix(input, postfix);
    }
    let str;
    if (this.isInternal(input)) {
      str = input.toLowerCase();
    } else {
      str = input;
    }

    if (typeof str === 'string' && typeof postfix === 'string') {
      if (stringUtil._isPostFixAvaileableInInput(str, postfix)) {
        return str;
      } else {
        return str + postfix;
      }
    }
  },
};
