export const stripHTMLTags = (htmlString) => {
    return htmlString.replace(/<br>/g, '\n').replace(/<[^>]+>/g, '');
};

export const replaceMergeTags = (data, htmlString) => {
    Object.keys(data).forEach(key => {
        const regexPattern = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
        htmlString = htmlString.replace(regexPattern, data[key]);
    });
    return htmlString;
};
