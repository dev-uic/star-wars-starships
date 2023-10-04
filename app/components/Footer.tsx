import ListItem from '@/ui/list-item';
import Paragraphs from '@/ui/paragraphs';
import FOOTER from '@/constants/FOOTER';
import styles from './footer.module.scss';

const Footer = () => {
    const { links, copy } = FOOTER;
    return (
        <footer className={styles.footer} data-testid="footer">
            <div className="content">
                <ListItem
                    listItems={links}
                    parentClass={styles.footer__links}
                    itemClass={styles.footer__link}
                />
                <Paragraphs copy={copy} containerClass={styles.footer__copy} />
            </div>
        </footer>
    );
};

export default Footer;
