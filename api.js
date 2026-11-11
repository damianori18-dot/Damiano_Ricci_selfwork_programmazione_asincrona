export const get_data = async () => {
    const response = await fetch('prodotti.json');
    const json = await response.json();
    return json;
}
