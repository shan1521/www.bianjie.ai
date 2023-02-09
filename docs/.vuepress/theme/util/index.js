const cfg = require('../../config.json');
const { ENV_INLAND_INTERNATIONAL } = require('../constants');

/**
 * get nav
 * @param {vue实例} vue 
 * @param {current language} lang 
 * @returns 
 */
const getLocalesNav = (vue, lang) => {
	return vue.$site.themeConfig.locales[lang].nav;
}

const getLocalesFooter = (vue, lang) => {
	return vue.$site.themeConfig.locales[lang].footer;
}

const getCurrentEdition = () => {
	return JSON.parse(cfg.isInternational);
}

// 获取国内、国际版本前缀
const getCurrentEditionPrefix = () => {
	const edition = getCurrentEdition();
	const editionPrefix = edition ? ENV_INLAND_INTERNATIONAL.international : ENV_INLAND_INTERNATIONAL.inland;
	return editionPrefix;
}

/**
 * 
 * @param {vue实例} vue 
 * @param {module content} content 
 * @returns 
 */
const getModuleContent = (vue, content) => {
	const editionPrefix = getCurrentEditionPrefix();
	return vue.$frontmatter[editionPrefix][content];
}

module.exports = {
	getLocalesNav,
	getLocalesFooter,
	getCurrentEdition,
	getCurrentEditionPrefix,
	getModuleContent
}