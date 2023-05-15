const createNextPage = (
    limit: number,
    offset: number,
    total: number,
    endpoint: string,
    ) => {
    const next = offset + limit;
    
    const nextPage = next < total
        ? `${endpoint}?limit=${limit}&offset=${next}`
        : null;

    return nextPage;
}

export default createNextPage;