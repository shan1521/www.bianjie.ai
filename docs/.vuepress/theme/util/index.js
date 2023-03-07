const cfg = require('../../config.json');
const { ENV_INLAND_INTERNATIONAL, LANG_OPTIONS } = require('../constants');

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
	// const editionPrefix = 'international';
	const editionPrefix = getCurrentEditionPrefix();
	return vue.$frontmatter[editionPrefix][content];
}

const getTextWidth = (text, font = '14px') => {
    if (!text) return 0;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    font && context && (context.font = font);
    const metrics = context && context.measureText(text);
    const textWidth = metrics && Math.ceil(metrics.width);
    context && context.clearRect(0, 0, canvas.width, canvas.height);
    return textWidth || 0;
};

const clearTimer = (timer) => {
	timer && clearTimeout(timer);
}

module.exports = {
	getLocalesNav,
	getLocalesFooter,
	getCurrentEdition,
	getCurrentEditionPrefix,
	getModuleContent,
	getTextWidth,
	clearTimer
}