'use client';

import { Card, Icon, Image } from 'semantic-ui-react';
import type { StarshipsWrapperProps } from './StarshipsWrapper';

const Starship = ({ MGLT, name, model, films }: StarshipsWrapperProps) => {
    return (
        <Card>
            <Image src={`/${MGLT}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>{model}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span>
                    <Icon name="film" />
                    Number of films: {films.length}
                </span>
            </Card.Content>
        </Card>
    );
};

export default Starship;
