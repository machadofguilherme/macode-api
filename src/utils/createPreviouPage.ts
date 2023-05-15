const createPreviouPage = (
    limit: number,
    offset: number,
    endpoint: string,
    ) => {
    const previous = offset - limit < 0
        ? null
        : offset - limit;
    
    const previousPage = previous != null
        ? `${endpoint}?limit=${limit}&offset=${previous}`
        : null;
    
    return previousPage;
}

export default createPreviouPage;