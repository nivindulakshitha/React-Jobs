export const checkImageURL = async (url) => {
    if (!url) {
        return false;
    }

    try {
        const response = await fetch(url, { method: 'HEAD' });
        const contentType = response.headers.get('content-type');
        return contentType && contentType.startsWith('image/');
    } catch (error) {
        return false;
    }
};
