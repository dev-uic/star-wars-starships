'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import styles from './panel.module.scss';

interface StarshipsWrapperProps {
    name: string;
    model: string;
    films: number;
    crew: string;
}

const StarshipsWrapper = ({
    name,
    model,
    films,
    crew,
}: StarshipsWrapperProps) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['starshipdata'],
        queryFn: async () => {
            const { data } = await axios.get('https://swapi.dev/api/starships');
            const { results } = data;

            return results as StarshipsWrapperProps[];
        },
    });

    if (isLoading) return <div>Loading Starships...</div>;

    if (isError)
        return <div>There was an error loading the Starships data.</div>;

    return (
        <div className="content">
            <div>inside starships wrapper</div>
            {data.map((starship) => {
                return <p>{starship.name}</p>;
            })}
        </div>
    );
};

export default StarshipsWrapper;
