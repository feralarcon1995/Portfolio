import { proyectData } from "../data/projectsData";

export const useData = () => {
    const getData = (projectID) => {
        return proyectData.filter(data => data.id === projectID)[0]
    }
    return {
        getData
    }
}