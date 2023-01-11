import globalVariablesRepository from '../repository/global-variable.repository';
export default {
  fillParameters(str, parameters) {
    const keys = Object.keys(parameters);
    keys.forEach((key) => {
      str = str && str.split(`{{${key}}}`).join(parameters[key]?.toString());
    });
    return str;
  },

  fillGlobalVariablesOnStringAttributesOfObject(object) {
    const isObject = (value) => !!value && typeof value == 'object';
    const isString = (value) => typeof value === 'string';
    const propertiesToOmmit = ['children', 'image', 'headings', 'date', 'childImageSharp'];

    Object.keys(object).forEach((key) => {
      if (isString(object[key])) {
        object[key] = this.fillParameters(
          object[key],
          globalVariablesRepository,
        );
      } else if (!propertiesToOmmit.includes(key) && isObject(object[key])) {
        this.fillGlobalVariablesOnStringAttributesOfObject(object[key]);
      }
    });
    return true;
  },

  capitalizeFirstLetter(word) {
    return word ? word[0].toUpperCase() + word.substring(1) : word;
  },

  _isPostFixAvaileableInInput(input, postfix) {
    return input.slice(-postfix.length) === postfix;
  },
  _hasQueryParams(url) {
    return url.includes('?');
  },
  _hasSharpSign(url) {
    return url.includes('#');
  },
  _removePostFix(input, postfix) {
    if (this._isPostFixAvaileableInInput(input, postfix)) {
      return input.slice(0, input.length - 1);
    }
    return input;
  },
  normalizeIdString(str) {
    return str
      .replace(/\s+/g, '-')
      .replace('?', '')
      .replace(']', '')
      .replace('[', '')
      .toLowerCase();
  },

  serializeReactElement(element) {
    const replacer = (key, value) => {
      switch (key) {
        case '_owner':
        case '_store':
        case 'ref':
        case 'key':
          return;
        default:
          return value;
      }
    };

    return JSON.stringify(element, replacer);
  },
};
