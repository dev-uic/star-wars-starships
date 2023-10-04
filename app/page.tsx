import Panel from '@/ui/panel';
// import styles from './page.module.scss';
import StarshipsWrapper from './components/StarshipsWrapper';

// temporary hack to trigger error handling
const session: Boolean | null = true;

export default function Home() {
    // check to see there was an error in Suspense, in which case the page won't load
    if (!session)
        throw new Error('There was an error trying to load this page');
    return (
        <Panel>
            <StarshipsWrapper />
        </Panel>
    );
}
