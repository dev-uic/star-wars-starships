'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface StarshipsProviderProps {
    children: React.ReactNode;
}

const StarshipsProvider = ({ children }: StarshipsProviderProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default StarshipsProvider;
