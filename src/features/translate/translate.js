import translations from './translations';

export default function translate(template, replacements) {
  if (replacements) {
    template = template.replace(/{([^}]+)}/g,function(_, key) {
      var value = replacements[key] || '{' + key + '}';
      return value;
    });
  }
  template = translations[template] || template;
  return template;
}