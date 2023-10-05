'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Starship from './Starship';

export interface StarshipsWrapperProps {
    MGLT: string;
    name: string;
    model: string;
    films: [];
    crew: string | number;
}

interface CrewData {
    crew: string | number;
}

const StarshipsWrapper = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['starshipdata'],
        queryFn: async () => {
            const { data } = await axios.get('https://swapi.dev/api/starships');
            const { results } = data;

            // Convert crew values from strings to Number
            const convertCrewToNumber = (
                array: StarshipsWrapperProps[]
            ): StarshipsWrapperProps[] => {
                return array.map((obj) => {
                    if (typeof obj.crew === 'string') {
                        obj.crew = Number(obj.crew.replace(/[,|-]/, ''));
                    }

                    return obj;
                });
            };

            const resultsFormatted = convertCrewToNumber(results).filter(
                (obj) => +obj.crew < 11
            );

            return resultsFormatted as StarshipsWrapperProps[];
        },
    });

    if (isLoading) return <div>Loading Starships...</div>;

    if (isError)
        return <div>There was an error loading the Starships data.</div>;

    return (
        <div className="content">
            <h1>Starships</h1>
            {data.map((starship) => {
                return <Starship key={starship.name} {...starship} />;
            })}
        </div>
    );
};

export default StarshipsWrapper;
